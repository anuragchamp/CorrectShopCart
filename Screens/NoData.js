import React from 'react';
import {Text , Image , View , StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EmptyScreen = () =>{
    return(
        <View style={styles.container}>
    
        </View>
       
    )
}

const styles  = StyleSheet.create({
    container: {
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          width:"100%",
          backgroundColor: 'orange',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
});


export default EmptyScreen;