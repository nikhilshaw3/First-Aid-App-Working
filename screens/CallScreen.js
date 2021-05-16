import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Platform
} from "react-native";
import { Card, Header, Icon } from "react-native-elements";
import MyHeader from '../components/MyHeader.js';
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
import { SafeAreaProvider } from "react-native-safe-area-context";
 
export default class App extends React.Component {
constructor(props) {
super(props);

this.state = {

userId: firebase.auth().currentUser.email,
userId: this.props.navigation.getParam("details")["user_Id"],
requestId: this.props.navigation.getParam("details")["request_id"],
number: this.props.navigation.getParam("details")["number"],
country: this.props.navigation.getParam("details")["country"],
userName: "",
userContact: "",
userDocId: "",

};
}

getUserDetails() {

console.log('inside userdetails',this.state)

db.collection("users").where("email_id", "==", this.state.userId).get().then((snapshot) => {snapshot.forEach((doc) => {
  
this.setState({
userContact: doc.data().contact,
userName: doc.data().first_name + " " + doc.data().last_name,
  
});
});
});
  
db.collection("Emergency").where("request_id", "==", this.state.requestId).get().then((snapshot) => {snapshot.forEach((doc) => {
            
this.setState({
userDocId: doc.id,
});
});
});
}
  
componentDidMount() {
this.getUserDetails(this.state.userId);
}

call = () => {

console.log("+++++++++callNumber ", this.state.number);

let phoneNumber = this.state.number;

if (Platform.OS !== "android") {
phoneNumber = `telprompt:${this.state.number}`;
} else {
phoneNumber = `tel:${this.state.number}`;
}

Linking.canOpenURL(phoneNumber).then(supported => {

if (!supported) {
Alert.alert("Number is not available");
} else {
return Linking.openURL(phoneNumber);
}
})
.catch(err => console.log(err));
};
 

render() {
return (

<View style={styles.container}>

<Header
leftComponent={<Icon name="arrow-left" type="feather" color="#ffffff" onPress={() => this.props.navigation.goBack()} />}
centerComponent={{ text: "Make a Call",style: {color: "#ffffff",fontSize: RFValue(20),fontWeight: "bold",},}}backgroundColor="red"
/>
        
<Text style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}>Enter the Number to make call</Text>

<TextInput

value={this.state.number}
onChangeText={number => this.setState({ number })}
placeholder={"Enter the Emergency number"}
style={styles.input}
keyboardType={"numeric"}
/>

<View style={{ marginTop: 20 }}>

<Button onPress={this.call} title="Make phone call" />

</View>
</View>
);
}
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5
  }
});