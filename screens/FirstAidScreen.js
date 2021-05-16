import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity, TextInput, Modal, Image, Alert, StyleSheet, ScrollView } from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js';
import { ListItem } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class FirstAidScreen extends Component {
constructor() {
super();

this.state = {
userId: firebase.auth().currentUser.email,
firstaidList: [],
};

this.requestRef = null;

}

getFirstAidList = () => {

this.requestRef = db.collection("First Aid Tips").onSnapshot((snapshot) => {
var firstaidList = snapshot.docs.map((doc) => doc.data());
    
this.setState({
firstaidList: firstaidList,
});
      
});
};

componentDidMount() {
this.getFirstAidList();
}

componentWillUnmount() {
this.requestRef();
}

keyExtractor = (item, index) => index.toString();

renderItem = ({ item, i }) => {
return (

<ListItem

key={i}
title={item.tip_name}
subtitle={"Click on the view button to see the first aid tips for this cause ."}
titleStyle={{ color: "black", fontWeight: "bold" }}
numberOfLines ={1}
leftElement={
  <Image
    style={{ height: 40, width: 40 , marginLeft: -5}}
    source={require('../assets/first.jpg')}
  />
}
rightElement={
<TouchableOpacity style={styles.button}onPress={() => { this.props.navigation.navigate("DetailsScreen", { details: item }); }}>
<Text style={{ color: "white" , fontWeight: 'bold'}}>View</Text>
</TouchableOpacity>
}

bottomDivider

/>
);
};

render() {
return (

<SafeAreaProvider style={styles.view}>

<MyHeader title="First Aid Tips" navigation={this.props.navigation}/>



<View style={{ flex: 1 }}>
{this.state.firstaidList.length === 0 ? (

<View style={styles.subContainer}>

<Text style={{ fontSize: 20 }}>List Of All First Aid Tips</Text>

</View>
) : (
<FlatList
keyExtractor={this.keyExtractor}
data={this.state.firstaidList}
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
    height: 30,
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