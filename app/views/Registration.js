import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage,
} from "react-native";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
    };
  }

  cancelRegistration = () => {
    Alert.alert("Registration cancelled");
    this.props.navigation.navigate("HomeRT");
  };

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert("Please enter a username");
    } else if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("The two passwords do not match");
    } else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if (result !== null) {
          Alert.alert(`Sorry, ${this.state.username} already exists`);
        } else {
          // using username as the key, password as the value:
          AsyncStorage.setItem(
            this.state.username,
            this.state.password,
            (err, result) => {
              Alert.alert(`account created for ${this.state.username}`);
              this.props.navigation.navigate("HomeRT");
            }
          );
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register Account</Text>

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

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ passwordConfirm: text })}
          value={this.state.passwordConfirm}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>

        <TouchableHighlight
          onPress={this.registerAccount}
          underlayColor={"#31e981"}
        >
          <Text style={styles.buttons}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.cancelRegistration}
          underlayColor={"#31e981"}
        >
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
