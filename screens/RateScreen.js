import React, { Component } from "react";
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,Linking} from "react-native";
import MyHeader from '../components/MyHeader.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class RateScreen extends Component{
render(){
return(
<SafeAreaProvider style={styles.view}>
<MyHeader title="Rate my app" navigation={this.props.navigation}/>


<Text style={{marginLeft: 130 , marginRight:30 , fontSize:80}}>😃</Text>

<Text style={{marginLeft: 30 , marginRight:30 ,fontSize: 15,marginTop: 20}}>If you like my app and want to rate my app on play store or want to see all my apps and games you can click on the button given below .</Text>

<TouchableOpacity style={[styles.button,{marginTop: 20,marginLeft: 75,justifyContent: 'center',alignContent: 'center',alignItems: 'center'}]} onPress={()=>{Linking.openURL("https://play.google.com/store/apps/dev?id=4718674765512695194")}}>

<Text style={{fontSize: 20,fontWeight: 'bold',color:'white'}}>My Developer Page</Text>

</TouchableOpacity>

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
      width: 200,
      height: 80,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      shadowColor: "#000",
      shadowOffset: {
        width: 50,
        height: 8,
      },
      borderRadius: 50,
      borderWidth: 2,
      elevation: 160,
    },
    view:{
      flex: 1,
      backgroundColor: "white"
    },
    santaImage:{
        width:"70%",
        height:"40%",
        resizeMode:"stretch",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
      },
  });