import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "./src/redux/store";

import { createAppContainer } from "react-navigation";

import MainNavigator from "./src/navigation/navigators/MainNavigator";

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
