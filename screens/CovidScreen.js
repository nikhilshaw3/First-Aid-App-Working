import React, { Component } from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import MyHeader from '../components/MyHeader.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class CovidScreen extends Component{
render(){
return(
<SafeAreaProvider style={styles.view}>
<MyHeader title="Covid Precautions" navigation={this.props.navigation}/>

<Image
source={require('../assets/virus.jpg')}
style={styles.santaImage}
/>

<ScrollView> 

<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>1. Clean your hands often. Use soap and water, or an alcohol-based hand rub.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>2. Maintain a safe distance from anyone who is coughing or sneezing.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>3. Wear a mask when physical distancing is not possible.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>4. Don’t touch your eyes, nose or mouth.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>5. Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>6. Stay home if you feel unwell.</Text>
<Text style={{fontSize: 17,marginLeft: 10,marginTop: 5,marginLeft:20,marginRight:20}}>7. If you have a fever, cough and difficulty breathing, seek medical attention.</Text>

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
      backgroundColor: "#fff"
    },
    santaImage:{
        width:"40%",
        height:"25%",
        resizeMode:"stretch",
        marginTop : 100,
        alignItems: 'center',
        justifyContent: 'center',
    marginLeft: 100,
    marginTop: 10
      },
  });