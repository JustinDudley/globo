import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
// import { StackNavigator } from 'react-navigation'; // Reggie

import { Header } from "../sections/Header";
import { TextInput } from "react-native-gesture-handler";

export class Contact extends React.Component {
  // not sure if this Reggie block is applicable:
  // static navigationOptions = {
  //   header: null,
  // };

  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter Message",
      name: "Enter Name",
      email: "Enter your email",
    };
  }

  clearFields = () => {
    this.setState({ msg: "", name: "", email: "" });
  };

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
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
        />
        <TextInput
          style={styles.multiInput}
          onChangeText={(text) => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true} // allows for longer input
          numberOfLines={4} // only if multiline=true
          // onKeyPress is another prop we could use, to deal with certain user key presses such as "enter"
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
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
    paddingBottom: "45%", // because keyboard will cover much of screen
  },
  heading: {
    flex: 1,
    fontSize: 16,
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10,
  },
  multiInput: {
    flex: 2,
    width: "90%",
    paddingTop: 20,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
});
