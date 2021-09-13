import { StatusBar } from 'expo-status-bar';
import React , {useState , useEffect}from 'react';
import { Image, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import axios from 'axios'
//const mongoose = require("mongoose")


export default function LoginScreen({navigation}) {

  const[userName , setName] =  useState("")
  const[password , setPassword] =  useState("")

  const getNamePass =  () => {
   
    axios({
      method:'post',
      url: 'http://f13edd554b30.ngrok.io/log',   // Pass url before log
      headers: {}, 
      data: {
        user:userName,
        pass:password // This is the body part
      }
    });} // To add then function for navigation route
/*    
    axios.post('https://b3c1e3171177.ngrok.io/log', {
      userName,
      password
    })
    .then(function (response) {
      
      console.log(response.config.data);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  


  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Image style={styles.logo} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'}} />
      <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#fff"
            value={userName}
            onChangeText = { userName  => setName(userName)}
      />
      <TextInput  
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password" 
            placeholderTextColor="#fff"
            value={password}
            onChangeText = { password  => setPassword(password)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={getNamePass}
      >
        <Text style={styles.txtshadow}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.txtcontainer}>
      <TouchableOpacity
        style={styles.forgotpwdsu}
        
      >
        <Text style={styles.txtshadow}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotpwdsu}
        onPress={()=>{navigation.navigate("Register")}}
      >
        <Text style={styles.txtshadow}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2471A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 100,
    width: 100,
    marginBottom: 5,
    marginTop: -50
  },
  inputText:{
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    color: '#fff'
  },
  button: {
    width:"80%",
    backgroundColor:"#1A5276",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 10
  },
  txtcontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  forgotpwdsu:{
    marginEnd: "15%",
    marginStart: "15%",
    marginTop: 5,
  },
  txtshadow:{
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
  }
});
