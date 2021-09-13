import React from "react";

import {DrawerContentScrollView , DrawerItem} from "@react-navigation/drawer";
import {Button, TouchableRipple ,Switch} from 'react-native-paper'
import Cart from '../Screens/Cart'


function MyButton(props){

    return(
        <Button icon={props.icon}  onPress={() => props.obj.navigate("Home")}>
          {props.name}
        </Button>
    )
}




export default MyButton;