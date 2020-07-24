import "react-native-gesture-handler"; // placed at very top, per React Native docs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./app/views/Home.js";
import { ContactForm } from "./app/views/ContactForm";
import { Video } from "./app/views/Video.js";
import { VideoDetail } from "./app/views/VideoDetail";
import { Registration } from "./app/views/Registration.js";

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
          <Stack.Screen name="ContactFormRT" component={ContactForm} />
          <Stack.Screen name="LessonsRT" component={Video} />
          <Stack.Screen name="video detail route" component={VideoDetail} />
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
