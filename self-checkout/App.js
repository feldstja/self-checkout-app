// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {
//       createStackNavigator,
//       createAppContainer
//     } from 'react-navigation-stack';
// import HomeScreen from './components/HomeScreen';
// import DetailsScreen from './components/DetailsScreen';
//
//
// const RootStack = createStackNavigator({
//   Home:{
//     screen : HomeScreen,
//
//   },
//   Details: {
//     screen: DetailsScreen,
//   },

    // initialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },

//});

import React, { Component } from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';


const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

const App = createAppContainer(RootStack);

export default App;


//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
