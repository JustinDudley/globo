import React from "react";
import { Home } from "./app/views/Home.js";
import { render } from "react-dom";

export default function App() {
  return <Home />;
}

// -- or --
// export default class App extends React.Component {
//   render() {
//     return <Home />;
//   }
// }
