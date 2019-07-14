import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ConversionScreen from "../screens/ConversionScreen";
import AboutScreen from "../screens/AboutScreen";

import Icon from "react-native-vector-icons/FontAwesome5";

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={35} color={tintColor} name="calculator" />
        )
      }
    },
    Conversion: {
      screen: ConversionScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={35} color={tintColor} name="ruler-combined" />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={35} color={tintColor} name="info-circle" />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      showLabel: false,
      style: { height: 60 }
    }
  }
);

export default MainNavigator;
