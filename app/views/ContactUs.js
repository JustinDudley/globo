import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";

import { Header } from "../sections/Header";
import { TextInput } from "react-native-gesture-handler";

export class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      msg: "",
      email: "",
    };
  }

  NAME_PLACEHOLDER = "Enter Name";
  MESSAGE_PLACEHOLDER = "Enter Message";
  EMAIL_PLACEHOLDER = "Enter Email";

  clearFields = () => {
    this.setState({ name: "", msg: "", email: "" });
  };

  sendMessage = () => {
    Alert.alert("Name: " + this.state.name, `Message: ${this.state.msg}`);
    this.props.navigation.goBack();
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          style={styles.inputs}
          // onChange --this prop can be used to call a function
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
          placeholder={this.NAME_PLACEHOLDER}
          placeholderTextColor={"#666666"}
        />
        <TextInput
          style={styles.multiInput}
          onChangeText={(text) => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true} // allows for longer input
          numberOfLines={4} // only if multiline=true
          placeholder={this.MESSAGE_PLACEHOLDER}
          placeholderTextColor={"#666666"}
          // onKeyPress is another prop we could use, to deal with certain user key presses such as "enter"
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
          placeholder={this.EMAIL_PLACEHOLDER}
          placeholderTextColor={"#666666"}
        />

        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}>Send Message</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.button}>Reset Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "5%",
    // paddingBottom: "45%", // this was supposed to HELP with the keyboard, but instead it broke it
  },
  heading: {
    flex: 1,
    fontSize: 16,
  },
  inputs: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 10,
    width: "80%",
    padding: 3,
    backgroundColor: "#cccccc",
    borderColor: "black",
    borderWidth: 1,
  },
  multiInput: {
    flex: 2,
    marginTop: 5,
    paddingLeft: 10,
    width: "80%",
    paddingTop: 5,
    backgroundColor: "#cccccc",
    borderColor: "#333333",
    borderWidth: 1,
  },
  buttons: {
    marginTop: 6,
    fontSize: 16,
  },
});
