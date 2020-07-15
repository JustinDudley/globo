import React from "react";
import { StyleSheet, Text, View, Image /*, Platform */ } from "react-native"; // Platform module used in commented-out code below

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
        <Image
          style={styles.logoStyle}
          source={require("./img/world-map.png")} //require is used to import the logo image
        />
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    flex: 1,
  },
  headStyle: {
    // width: 100,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000",
    // marginTop: 25, // my own addition
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
    //
    // 2 ways to be platform-specific:
    // backgroundColor: Platform.OS === "android" ? "#31e981" : "#35605a",
    // - OR -
    // ...Platform.select({
    //   ios: { backgroundColor: "red" },
    //   android: { backgroundColor: "purple" },
    // }),
    //
    // Can also select WHOLE COMPONENTS to use based on Platform.select()
  },
  logoStyle: { flex: 1, width: undefined, height: undefined },
});

//verbage: "a const named styles, which will hold our style object"
// also: "our Stylesheet create method", referring to Stylesheet.create({})

// this.props.message: Static.   => PROPS
// user:  eventually, this will be dynamic:  => STATE
