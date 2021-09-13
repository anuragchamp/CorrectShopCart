import React from "react";
import {Text , Label} from 'react-native'
import { createDrawerNavigator, DrawerItemList, } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import  Profile from "../Screens/DrawerContent"

import Bottom from "../Screens/CustomTabBar/BottomTab";

import { LoginScreenNavigator , RegisterScreenNavigator , AddItemScreenNavigator, ProductScreenNavigator, StartPageScreenNavigator } from "./StackNavigation";




const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent = {  (props) => <Profile {...props} />}
    >
     <Drawer.Screen name="Home"  component={TabNavigator}   />
     <Drawer.Screen name="Login"  component={LoginScreenNavigator}   />
     <Drawer.Screen name="Register"  component={RegisterScreenNavigator}   />
     <Drawer.Screen name="AddItem"  component={AddItemScreenNavigator}   />
     <Drawer.Screen name="Product"  component={ProductScreenNavigator}   />
     <Drawer.Screen name="StartPage"  component={StartPageScreenNavigator}   />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;