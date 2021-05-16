import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import FirstAidScreen from '../screens/FirstAidScreen'
import CovidScreen from '../screens/CovidScreen'
import UseScreen from '../screens/UseScreen'
import DetailsScreen from '../screens/DetailsScreen'
import CallingScreen from '../screens/CallScreen'

export const AppStackNavigator = createStackNavigator({
    
FirstAidScreen : {
screen : FirstAidScreen,
navigationOptions:{headerShown : false}
},

DetailsScreen : {
screen : DetailsScreen,
navigationOptions:{headerShown : false}
},

CallingScreen : {
    screen : CallingScreen,
    navigationOptions:{headerShown : false}
    }
},
{
initialRouteName: 'FirstAidScreen'
}
);