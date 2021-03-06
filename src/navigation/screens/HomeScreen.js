import React from "react";
import { SafeAreaView, View, Text, Platform, StyleSheet } from "react-native";

import OutputDisplay from "../../components/OutputDisplay";
import InputDisplay from "../../components/InputDisplay";
import Keyboard from "../../components/Keyboard";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Calculator</Text>
        <OutputDisplay />
        <InputDisplay />
        <Keyboard />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
