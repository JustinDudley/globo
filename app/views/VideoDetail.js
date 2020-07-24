import React from "react";
import { WebView } from "react-native-webview";

export class VideoDetail extends React.Component {
  render() {
    let tubeId = this.props.route.params?.ytubeId ?? "NO VIDEO";
    let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;

    return <WebView style={{ marginTop: 20 }} source={{ uri: tubeUrl }} />;
  }
}

// we are using WebView to display the video. Similar to iFrame
