import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class WelcomeScreen extends Component{

constructor(){
super()

this.state={

emailId: "",
password: "",
firstName: "",
lastName: "",
address: "",
contact: "",
confirmPassword: "",
isModalVisible : "false" ,

}}

userSignUp = (emailId , password , confirmPassword) => {

if(password !== confirmPassword) {

return Alert.alert("password doesn't match\nCheck your password.");

}else{

firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => {

db.collection("users").add({
first_name: this.state.firstName,
last_name: this.state.lastName,
email_id: this.state.emailId,
contact: this.state.contact

});

return Alert.alert("User Added Successfully", "", [

{
text: "OK",

onPress: () => this.setState({ isModalVisible: false }),

},
]);
})

.catch((error) => {

var errorCode = error.code;
var errorMessage = error.message;
return Alert.alert(errorMessage);

});
}
}

userLogin = (emailId, password) => {

firebase.auth().signInWithEmailAndPassword(emailId, password).then(() => {

this.props.navigation.navigate("FirstAidScreen");

})

.catch((error) => {

var errorCode = error.code;
var errorMessage = error.message;
return Alert.alert(errorMessage);

});
};


showModal = () => {

return (

<Modal animationType="slide" transparent={true} visible={this.state.isModalVisible} >
<ScrollView style={styles.scrollview}>

<View style={styles.signupView}>

<Text style={[styles.signupText,{marginTop: 40}]}> SIGN UP </Text>

</View>

<View style={{flex:0.95}}>

<Text style={styles.label}>First Name </Text>

<TextInput

style={styles.formInput}
placeholder={"First Name"}
maxLength={12}
onChangeText={(text) => {

this.setState({

firstName: text,

});
}}

/>

<Text style={styles.label}>Last Name </Text>

<TextInput

style={styles.formInput}
placeholder={"Last Name"}
maxLength={12}
onChangeText={(text) => {

this.setState({

lastName: text,

});
}}
/>

<Text style={styles.label}>Contact </Text>

<TextInput

style={styles.formInput}
placeholder={"Contact"}
maxLength={10}
keyboardType={"numeric"}
onChangeText={(text) => {
    
this.setState({

contact: text,

});
}}
/>

<Text style={styles.label}>Email </Text>

<TextInput

style={styles.formInput}
placeholder={"Email"}
keyboardType={"email-address"}
onChangeText={(text) => {

this.setState({

emailId: text,

});
}}

/>

<Text style={styles.label}> Password </Text>

<TextInput

style={styles.formInput}
placeholder={"Password"}
secureTextEntry={true}
onChangeText={(text) => {

this.setState({

password: text,

});
}}

/>

<Text style={styles.label}>Confirm Password</Text>

<TextInput

style={styles.formInput}
placeholder={"Confirm Password"}
secureTextEntry={true}
onChangeText={(text) => {

this.setState({

confirmPassword: text,

});
}}
/>

</View>

<View style={{flex:0.2,alignItems:'center'}}>

<TouchableOpacity style={styles.registerButton}

onPress={() =>this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}

>

<Text style={styles.registerButtonText}>Register</Text>

</TouchableOpacity>

<Text style={styles.cancelButtonText} onPress={() => {this.setState({ isModalVisible: false })}}>Cancel</Text>

</View>
</ScrollView>
</Modal>

);
};

render(){
return(

<SafeAreaProvider style={styles.container}>

{this.showModal()}

<View style={{ flex: 0.25}}>
<View style={{flex:0.15}}/>
<View style={styles.santaView}>

<Image
source={require('../assets/Poster.jpg')}
style={styles.santaImage}
/>

<Text style ={{fontSize: 50,fontWeight: 'bold'}}>FIRST AID</Text>

</View>
</View>

<View style={{ flex: 0.45 }}>
<View style={styles.TextInput}>

<TextInput

style={[styles.loginBox,{marginTop: 270}]}
placeholder="ENTER YOUR E-MAIL"
placeholderTextColor="gray"
keyboardType="email-address"
onChangeText={(text) => {

this.setState({

emailId: text,

})
}}
value={this.state.emailId}
/>

<TextInput

style={[styles.loginBox,{marginTop:RFValue(15)}]}
secureTextEntry={true}
placeholder="ENTER PASSWORD"
placeholderTextColor="gray"
onChangeText={(text) => {
              
this.setState({

password: text,

});
}}
/>

</View>

<View style={{flex:0.5,  alignItems:"center",}}>

<TouchableOpacity style={[styles.button,{marginTop: 150}]} onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}>

<Text style={styles.buttonText}>LOGIN</Text>

</TouchableOpacity>

<TouchableOpacity style={[styles.button,{backgroundColor: 'orange',width: 240,marginTop:30}]} onPress={() => this.setState({ isModalVisible: true })}>

<Text style={styles.buttonText}>SIGN - UP</Text>

</TouchableOpacity>
</View>
</View>

<View style={{ flex: 0.3}}>

</View>
</SafeAreaProvider>
)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E62E2D",
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black',
    
  },
  button: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "yellow",
    shadowColor: "#000",
    marginBottom:RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 50,
    borderWidth: 5
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(20),
    
  },
  label:{
    fontSize:RFValue(13),
    color:"red",
    fontWeight:'bold',
    paddingLeft:RFValue(10),
    marginLeft:RFValue(20)
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:5,
    borderColor:"grey",
    paddingBottom:RFValue(10),
    marginLeft:RFValue(20),
    marginBottom:RFValue(14)
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop:RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(20),
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButtonText:{
    fontSize : RFValue(20),
    fontWeight:'bold',
    color: "red",
    marginTop:RFValue(10)
  },
  scrollview:{
    flex: 1,
    backgroundColor: "#fff"
  },
  signupView:{
    flex:0.05,
    justifyContent:'center',
    alignItems:'center'
},
signupText:{
  fontSize:RFValue(20),
  fontWeight:"bold",
  color:"red"
},
santaView:{
  flex:0.85,
  justifyContent:"center",
  alignItems:"center",
  padding:RFValue(10),
},
santaImage:{
  width:"70%",
  height:"200%",
  resizeMode:"stretch",
  marginTop : 100,
},
TextInput:{
  flex:0.5,
  alignItems:"center",
  justifyContent:"center"
},
bookImage:{
  width:"100%",
  height:RFValue(220)
}
});
