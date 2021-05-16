import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity, TextInput, Modal, Image, Alert, StyleSheet, ScrollView } from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js';
import { ListItem,Icon } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class FirstAidScreen extends Component {
constructor() {
super();

this.state = {
userId: firebase.auth().currentUser.email,
numberList: [],
};

this.requestRef = null;

}

getNumberList = () => {

this.requestRef = db.collection("Emergency").onSnapshot((snapshot) => {
var numberList = snapshot.docs.map((doc) => doc.data());
    
this.setState({
numberList: numberList,
});
      
});
};

componentDidMount() {
this.getNumberList();
}

componentWillUnmount() {
this.requestRef();
}

keyExtractor = (item, index) => index.toString();

renderItem = ({ item, i }) => {
return (

<ListItem

key={i}
title={item.country}
subtitle={"Click on the call button to call on this country emergency service ."}
titleStyle={{ color: "black", fontWeight: "bold" }}
numberOfLines ={1}
leftElement={
  <Icon name="phone" type ="font" />
}
rightElement={
<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("CallingScreen" , { details: item })}}>
<Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
</TouchableOpacity>
}

bottomDivider

/>
);
};

render() {
return (

<SafeAreaProvider style={styles.view}>

<MyHeader title="Emergency Numbers" navigation={this.props.navigation}/>



<View style={{ flex: 1 }}>
{this.state.numberList.length === 0 ? (

<View style={styles.subContainer}>

<Text style={{ fontSize: 20 }}>List Of Emergency Numbers .</Text>

</View>
) : (
<FlatList
keyExtractor={this.keyExtractor}
data={this.state.numberList}
renderItem={this.renderItem}
/>

)}

</View>
</SafeAreaProvider>
)
}
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: 30,
    borderWidth: 2,
    elevation: 160,
  },
  view: {
    flex: 1,
    backgroundColor: "#fff"
    
  }
});