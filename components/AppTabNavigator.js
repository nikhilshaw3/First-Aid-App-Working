import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import {Icon} from 'react-native-elements';
import CovidScreen from '../screens/CovidScreen'
import FirstAidScreen from '../screens/FirstAidScreen'


export const AppTabNavigator = createBottomTabNavigator({
  FirstAidScreen : {
   screen : AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/first.jpg")} style={{width:35, height:30}}/>,
      tabBarLabel : "FIRST AID TIPS",
    }
  },

  CovidScreen : {
 screen : CovidScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/virus.jpg")} style={{width:35, height:30}}/>,
      tabBarLabel : "COVID PRECAUTIONS",
    }
  },
 
});