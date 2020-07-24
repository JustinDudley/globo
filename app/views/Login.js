import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Alert,
  TouchableHighlight,
} from "react-native";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  cancelLogin = () => {
    Alert.alert("Login cancelled");
    this.props.navigation.navigate("home");
  };

  loginUser = () => {
    if (!this.state.username) {
      Alert.alert("Please enter a username");
    } else if (!this.state.password) {
      Alert.alert("Please enter a password");
    } else {
      AsyncStorage.getItem("userLoggedIn", (err, result) => {
        // when user logs off, 'userLoggedIn' will be set to none
        if (result !== "none") {
          Alert.alert("Someone already logged on");
          this.props.navigation.navigate("home");
        } else {
          AsyncStorage.getItem(this.state.username, (err, result) => {
            if (result !== null) {
              if (result !== this.state.password) {
                Alert.alert("Password incorrect");
              } else {
                AsyncStorage.setItem(
                  "userLoggedIn",
                  this.state.username,
                  (err, result) => {
                    // Yes, we're getting here. But the username in state in this component is "reaching" the rendering on the home screen
                    Alert.alert(`${this.state.username} is logged in`);
                    console.log(`user **${this.state.username}** is logged in`);
                    this.props.navigation.navigate("home");
                  }
                );
              }
            } else {
              Alert.alert(`There is no account for ${this.state.username}`);
            }
          });
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Enter Username</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Enter Password</Text>

        <TouchableHighlight onPress={this.loginUser} underlayColor="#31e981">
          <Text style={styles.buttons}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.cancelLogin} underlayColor="#31e981">
          <Text style={styles.buttons}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "3%",
  },
  heading: {
    flex: 1,
    width: "80%",
    paddingTop: 10,
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 5,
    height: "13%",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#999999",
    borderRadius: 8,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
  labels: {
    paddingBottom: 10,
  },
});
