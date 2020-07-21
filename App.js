import "react-native-gesture-handler"; // placed at very top, per React Native docs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./app/views/Home.js";
import { Contact } from "./app/views/Contact";

const Stack = createStackNavigator(); // returns an object containing 2 properties: Screen and Navigator

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeRT">
          <Stack.Screen
            name="HomeRT"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ContactRT" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// -- or --
// export default function App() {
//   return <Home />;
// }
