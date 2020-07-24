import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  Alert /*, Platform */,
} from "react-native"; // Platform module used in commented-out code below

export class Header extends React.Component {
  constructor(props) {
    super(props); // access to parent class
    this.state = { isLoggedIn: false, loggedUser: false };
  }

  toggleUser = () => {
    if (this.state.isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
        this.setState({ isLoggedIn: false, loggedUser: false });
        Alert.alert("User logged out");
      });
    } else {
      this.props.navigate("login");
    }
  };

  componentDidMount() {
    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      // case where no user is logged on:
      if (result === "none") {
        console.log("NONE");
        // if user goes to login FIRST, null is returned and we incorrectly will think a user is logged in. To solve that:
      } else if (result === null) {
        AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
          console.log("Set user to NONE");
        });
        // if a user IS returned:
      } else {
        console.log("hi");
        this.setState({
          isLoggedIn: true,
          loggedUser: result,
        });
      }
    });
  }

  render() {
    let display = this.state.isLoggedIn
      ? `${this.state.loggedUser} (press to logout)`
      : this.props.message;
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
    flex: 2,
  },
  headStyle: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000",
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
  },
  logoStyle: { flex: 1, width: undefined, height: undefined },
});

//verbage: "a const named styles, which will hold our style object"
// also: "our Stylesheet create method", referring to Stylesheet.create({})

// this.props.message: Static.   => PROPS
// user:  eventually, this will be dynamic:  => STATE

//
//
// 2 ways to be platform-specific (in the StyleSheet):
// backgroundColor: Platform.OS === "android" ? "#31e981" : "#35605a",
// - OR -
// ...Platform.select({
//   ios: { backgroundColor: "red" },
//   android: { backgroundColor: "purple" },
// }),
//
// Can also select WHOLE COMPONENTS to use based on Platform.select()
