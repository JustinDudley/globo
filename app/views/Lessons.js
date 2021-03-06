import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from "react-native";

export class Lessons extends React.Component {
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.listIsLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              keyExtractor={(item) => item.id.videoId}
              data={this.state.videoList}
              renderItem={({ item }) => (
                <YouTubeItem
                  navigate={navigate}
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

export class YouTubeItem extends React.Component {
  buttonHandler = () => {
    // console.log(this.props.id);
    // check out how I can pass something from one component to another using .navigate!
    this.props.navigate("show video", { ytubeId: this.props.id });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.buttonHandler}>
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
