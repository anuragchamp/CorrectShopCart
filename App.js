import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigation';
import StartPage from './Screens/StartPage';


export default function App() {

  const[isShowPage , setShowPage] = useState(false)

  useEffect( ()=>{
    setTimeout( () => {
      setShowPage(true)
    }, 500)
  },[])


  if(!isShowPage){
    return (
      <StartPage />
    )  
  }
  else{
    return (
      <NavigationContainer style={styles.container}>    
         <DrawerNavigator />
         <StatusBar style="light" backgroundColor="#000"/>
      </NavigationContainer>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
