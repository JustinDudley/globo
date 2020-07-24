import "react-native-gesture-handler"; // placed at very top, per React Native docs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./app/views/Home.js";
import { ContactUs } from "./app/views/ContactUs";
import { Video } from "./app/views/Video.js";
import { VideoDetail } from "./app/views/VideoDetail";
import { Registration } from "./app/views/Registration.js";

const Stack = createStackNavigator(); // returns an object containing 2 properties: Screen and Navigator

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="contact us" component={ContactUs} />
          <Stack.Screen name="lessons" component={Video} />
          <Stack.Screen name="show video" component={VideoDetail} />
          <Stack.Screen name="registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// -- or --
// export default function App() {
//   return <Home />;
// }
