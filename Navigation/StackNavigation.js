import React ,{  useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Dimensions} from "react-native";
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Browse from "../Screens/Browse";

import { AntDesign } from '@expo/vector-icons'; 
import LoginScreen from "../Screens/LoginScreen";

import Register from "../Screens/Register";
import AddItem from "../Screens/AddItem";
import Product from "../Screens/Product"
import StartPage from "../Screens/StartPage";

const Stack = createStackNavigator();

const windowWidth = Dimensions.get('window').width;

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#a8c66c",
  },
 headerTitleStyle:{
  fontWeight: 'bold',
  position:"relative",
  left:windowWidth/6,
 },
  headerTintColor: "#fff",
  headerBackTitle: "Back",
};

const HomeStyle = {
  headerStyle: {
    backgroundColor: "#a8c66c",
  },
 headerTitleStyle:{
  alignSelf: 'center',
  transform:[
    {translateX: -28}
  ]
  
 },
  headerTintColor: "#fff",
  headerBackTitle: "Back",
};



const MainStackNavigator = ({route,navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={HomeStyle}>
      <Stack.Screen  name={"Home"}  component={Home}  options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="menuunfold" 
               size={24} 
               onPress={ () => navigation.openDrawer()}  
            />
          ),
        }}/>
    </Stack.Navigator>
  );
}
const BrowseStackNavigator = ({route,navigation}) => {
  return (
    <Stack.Navigator  screenOptions={HomeStyle}>
      <Stack.Screen  name={"Browse"}  component={ Browse}  options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () =>navigation.goBack()}  
            />
          ),
        }}/>
    </Stack.Navigator>
  );
}
const CartStackNavigator = ({route,navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Loading" screenOptions={HomeStyle}>
      <Stack.Screen  name={"Cart"}  component={ Cart}  options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () => navigation.goBack()}  
            />
          ),
        }}/>
    </Stack.Navigator>
  );
}

const LoginScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}
       options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () => navigation.goBack()}  
            />
          ),
        }}
    >
      <Stack.Screen  name={"Login"} component={LoginScreen}  />
    </Stack.Navigator>
  );
}

const RegisterScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen  name={"Register"} component={Register} 
        options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () =>navigation.goBack()}  
            />
          ),
        }}
      
       />
    </Stack.Navigator>
  );
}
const AddItemScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen  name={"AddItem"} component={AddItem} 
         options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () => navigation.goBack()}  
            />
          ),
        }}
       />
    </Stack.Navigator>
  );
}
const ProductScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen  name={"Product"} component={Product} options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="arrowleft" 
               size={24} 
               onPress={ () => navigation.goBack()}  
            />
          ),
        }}  />
    </Stack.Navigator>
  );
}
const StartPageScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen  name={"StartPage"} component={StartPage}  />
    </Stack.Navigator>
  );
}



export { MainStackNavigator, CartStackNavigator, BrowseStackNavigator, LoginScreenNavigator , RegisterScreenNavigator,ProductScreenNavigator,StartPageScreenNavigator  , AddItemScreenNavigator}