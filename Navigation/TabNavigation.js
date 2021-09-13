import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { MainStackNavigator , BrowseStackNavigator , CartStackNavigator, ProductScreenNavigator} from "./StackNavigation";
import { FloatingAction } from "react-native-floating-action";
import CustomTabBar from "../Screens/TabBar";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}) => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Browse') {
          iconName = focused ? 'shopping' : 'shopping-outline';
        }
         else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        }

        // You can return any component that you like here!
        
        return <MaterialCommunityIcons  name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: '#000',
      style: {
        backgroundColor: '#a8c66c', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 50 : 50 // I didn't use this in my app, so the numbers may be off. 
      }
    }}
     >
      <Tab.Screen  name="Home"  component={MainStackNavigator} />
      <Tab.Screen  name="Browse" component={BrowseStackNavigator} />
      <Tab.Screen  name="Cart" component={CartStackNavigator} /> 
     
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;