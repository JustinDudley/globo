import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props); // access to parent class
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState((previousState) => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  render() {
    let display = this.state.isLoggedIn ? "John Doe" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle: {
    marginTop: 25, // my own addition
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
    flex: 1,
    // width: 100,
  },
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
  },
});

//verbage: "a const named styles, which will hold our style object"
// also: "our Stylesheet create method", referring to Stylesheet.create({})

// this.props.message: Static.   => PROPS
// user:  eventually, this will be dynamic:  => STATE
