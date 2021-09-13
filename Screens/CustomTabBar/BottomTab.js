import React from 'react';
import {StyleSheet , View} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackNavigator} from '../../Navigation/StackNavigation'

const BottomBar = createBottomTabNavigator();


const TabBar = () =>{
    return (
        <BottomBar.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
         
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor:'#fff'
        }
      }}
    >

      <BottomBar.Screen  name="Browse" component={MainStackNavigator} />
      <BottomBar.Screen  name="Cart" component={MainStackNavigator} /> 
    </BottomBar.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    navigatorContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // SHADOW
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      elevation: 30
    },
    xFillLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 34
    }
  });

export default TabBar;