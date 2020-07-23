import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from "react-native";

export class Video extends React.Component {
  // static navigationOptions = {
  //     header: null
  // };
  // what was that tricky navigation thing I needed to include in my other classes?

  constructor(props) {
    super(props);
    this.state = { listIsLoaded: false }; // formerly listLoaded, okay to change?
  }

  componentDidMount() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyBgI_5yqq4pQWwJlmIdBqpDH5P4X0BUBU8"
    )
      .then((res) => res.json())
      .then((resJson) =>
        this.setState({
          listIsLoaded: true,
          // 3 things: note videoList is added on-the-fly, doesn't need to be initialized in constructor.  Array.from() method transfes data into an array.   .items will be useful in drilling down into the actual videos, and ignoring everything else in the array.
          videoList: Array.from(resJson.items),
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <View>
        {this.state.listIsLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              keyExtractor={(item) => item.id.videoId}
              data={this.state.videoList}
              renderItem={({ item }) => (
                <YouTubeItem
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              )}
            />
          </View>
        )}
        {!this.state.listIsLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> --LOADING--</Text>
          </View>
        )}
      </View>
    );
  }
}

// normally, this would get its own file...
export class YouTubeItem extends React.Component {
  onPress = () => {
    console.log("The id of this video_? is: ", this.props.id);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
