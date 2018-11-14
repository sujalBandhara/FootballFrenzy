import React, { Component } from 'react';
import { Platform } from 'react-native';

import { StackNavigator } from "react-navigation";
console.disableYellowBox = true

var HomeScreen = require("./app/screens/home/HomeScreen.js");

export default App = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'HomeScreen',
    statusBarHidden: false,
    headerMode: "screen"
  }
);

if (Platform === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}