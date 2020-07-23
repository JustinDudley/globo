import React from "react";
import { Text, View } from "react-native";

export class VideoDetail extends React.Component {
  render() {
    let tubeId = this.props.route.params?.ytubeId ?? "NO VIDEO";

    // navigation.getParam(
    //   "ytubeId",
    //   "NO VIDEO"
    // ); /* 2nd option is the default if no param is present */

    return (
      <View style={{ paddingTop: 40 }}>
        <Text>{tubeId}</Text>
      </View>
    );
  }
}
