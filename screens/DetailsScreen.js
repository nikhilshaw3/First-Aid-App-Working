import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image ,ScrollView,Linking} from "react-native";
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class DetailsScreen extends Component{
constructor(props){
super(props)

this.state = {
userId: firebase.auth().currentUser.email,
userName: "",
userId: this.props.navigation.getParam("details")["user_Id"],
requestId: this.props.navigation.getParam("details")["request_id"],
tipName: this.props.navigation.getParam("details")["tip_name"],
steps: this.props.navigation.getParam("details")["steps"],
userName: "",
userContact: "",
userDocId: "",
}
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

db.collection("First Aid Tips").where("request_id", "==", this.state.requestId).get().then((snapshot) => {snapshot.forEach((doc) => {
          
this.setState({

userDocId: doc.id,

});
});
});
}

componentDidMount() {
this.getUserDetails(this.state.userId);
}

render() {
return (

<SafeAreaProvider style={{ flex: 1 }}>
<View style={{ flex: 0.1 }}>

<Header

leftComponent={<Icon name="arrow-left" type="feather" color="#ffffff" onPress={() => this.props.navigation.goBack()} />}
centerComponent={{ text: "Details of this cause",style: {color: "#ffffff",fontSize: RFValue(20),fontWeight: "bold",},}}backgroundColor="red"

/>

</View>

<View style={{ flex: 0.9}}>
<View style={{flex: 0.3,flexDirection: "row",paddingTop: RFValue(30),paddingLeft: RFValue(10),}}>
<View style={{ flex: 0.4,height: 250}}>


</View>

<View style={{flex: 0.6,alignItems: "center",justifyContent: "center",marginTop: 20}}>

<Text 

style={{
fontWeight: "bold",
fontSize: RFValue(25),
textAlign: "center",
justifyContent: 'center',
alignItems: 'center',
alignContent: 'center',
marginLeft: -150,

}}

>{this.state.tipName}</Text>

</View>
</View>

<View style={{padding: RFValue(20),marginTop:20}}>
<View style={{borderWidth:2,borderColor:'red',height: 390,marginBottom: -90}}>

<ScrollView>

<Text style={{fontWeight: "100",fontSize: RFValue(15),marginTop: RFValue(15),padding:RFValue(15)}}>{this.state.steps}</Text>

</ScrollView>
</View>

<View style={{flex: 0.7}}>


</View>
</View>
</View>
</SafeAreaProvider>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginLeft: 50,
    width: 200,
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(60),
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
    marginTop: 20,
    borderWidth: 2
   
  },
});