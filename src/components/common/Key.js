import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Key extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
