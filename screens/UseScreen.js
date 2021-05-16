import React, { Component } from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import MyHeader from '../components/MyHeader.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class FirstAidScreen extends Component{
render(){
return(
<SafeAreaProvider style={styles.view}>
<MyHeader title="How to use this app" navigation={this.props.navigation}/>

<Image
source={require('../assets/Help.png')}
style={styles.santaImage}
/>


<ScrollView> 

<Text style={{marginLeft: 30 , marginRight:30 , fontSize:15}}>
This is a First Aid App . This app contains most of the First aid tips . Also this app contains some major precautions from Covid - 19 or Corona Virus. 
On the First aid screen you can see the first aid tips . You can click on the view button given there at the right side of every cause , 
by clicking there you can view the first aid tips for different causes . If you like my app you can also rate my app on google play store .
You can setup your profile picture also . You can change your account details by going to Setting screen . You can also add first aid tips 
by going to add screen . Some Emergency numbers are also given in this app .
</Text>

</ScrollView>

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
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
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