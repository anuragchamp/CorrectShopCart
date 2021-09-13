import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {DrawerContentScrollView , DrawerItem} from "@react-navigation/drawer";
import {Avatar , Title , Caption,Paragraph , Drawer , Text ,Button, TouchableRipple ,Switch} from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import MyButton from "./MyButton";



const Profile = ({navigation , ...props }) => {
  return (
    <View style={{flex : 1,}}>
        <DrawerContentScrollView {...props}>
          <View>
                <View style={{backgroundColor:"#2C3E50", marginTop:-5,borderBottomWidth:5, borderBottomColor:"#000", }}>   
                   {/* <Avatar.Image style={{margin:15,}} size={55} source={require('../Images/letter-a.png')} /> */}
                   <Avatar.Text style={{marginTop:25,marginLeft:15,}} size={55} label="AC" />
                   <Title style={{margin:3,fontSize:20,color:"#fff",marginTop:25,marginLeft:10}}>Anurag Chhaperwal</Title>
                   <Caption style={{marginLeft:10,color:"#fff",}}>anuragchamp71@gmail.com</Caption>
                   {/* <Avatar.Icon onPress={ () => alert("fuck you")} style={{transform:[{translateX: 250}],backgroundColor:'rgba(0,0,0,0)'}} size={24} icon="chevron-down" /> */}
                   <Button icon="chevron-down" labelStyle={{fontSize: 30, color: '#fff'}} style={{transform:[{translateX: 230}],border: 'none',backgroundColor:'rgba(0,0,0,0)', color: '#fff', width: 0, fontSize: 30, borderTopLeftRadius: 30, borderBottomLeftRadius: 30}} onPress={() => console.log('Pressed')} />
                </View>
                <View style={{marginTop:5,}}>
                <Button icon='map-marker'   onPress={() => navigation.navigate("Register")}>
                    Location
                </Button>
                <Button icon='map-marker'   onPress={() => navigation.navigate("AddItem")}>
                    Add Item
                </Button>
                  <MyButton name="Manage Address" icon="map" />
                  <MyButton name="My Account" icon="id-card"/>
                  <MyButton name="My Orders" icon="clipboard-check"/>
                  <MyButton name="Wish List" icon="clipboard-list"/>
                  <MyButton name="Offers" icon="buffer"/>
                  <MyButton name="Settings" icon="cogs"/>
                  <MyButton name="Customer-Support" icon="phone"/>
                </View>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
        <Button icon='logout'   onPress={() => navigation.navigate("Login")}>
          SignOut
        </Button>
        </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bottomDrawerSection:{
      marginBottom:0,
      borderTopColor:"#f4f4f4",
      borderTopWidth:1,
  }
});

export default Profile;