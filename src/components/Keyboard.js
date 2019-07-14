import React, { Component } from "react";
import { View, Text } from "react-native";
import Key from "./common/Key";
export default class Keyboard extends Component {
  render() {
    return (
      <View>
        <Key value="1" />
        <Key value="2" />
        <Key value="3" />
      </View>
    );
  }
}
