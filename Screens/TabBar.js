import React from "react";
import { View, StyleSheet,Text,useState } from "react-native";
import { FAB, Portal, Provider , Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { TextInput } from "react-native-gesture-handler";


const CustomTabBar = ({...propps}) =>{

    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
   

   

    return(
        <View style={{flex:0.07 ,backgroundColor:"#9AC4F8"  , }}>
           
         
      </View>
    ) 
}

export default CustomTabBar;