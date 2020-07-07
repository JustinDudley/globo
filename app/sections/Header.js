import React from "react";
import { Stylesheet, Text } from "react-native";

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
    return <Text onPress={this.toggleUser}>{display}</Text>;
  }
}

// this.props.message: Static.   => PROPS
// user:  eventually, this will be dynamic:  => STATE
