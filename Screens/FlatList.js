import React, { useState , useEffect } from "react";
import axios from 'axios'
import { View ,ImageBackground,FlatList, SafeAreaView, StatusBar,Image, StyleSheet, Text, TouchableOpacity , Button } from "react-native";
import SlideShowWithOutDisc from "./SlideShowWithOutDisc";
import SlideShow from "./SlideShow";
import { useNavigation } from '@react-navigation/native';


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://picsum.photos/50/50?random=${Math.floor(Math.random()*10 + 2)}`,
        }}
      />
    <Text style={styles.title}>{item.Category}</Text>
    
    {/* <Image source={require(item.img[0].buffer)} />  */}
  </TouchableOpacity>
);

const header = () =>{
 
  return (
    <Text style={styles.headText}>Categories</Text>
  )

}

const renderItem = ({ item }) => {
   console.log("data = "+item)
  return (
    <Item
      item={item}
      onPress={ () => { alert()}}
    />
  );
};


const FltList =( props  , {route , navigation}) => { 
  const [data , setData] = useState(props.obj);
  const [id , setId] = useState(1);


  useEffect( () =>{
    console.log(data);
  },[props.obj]);

 
  return (
    <View style={{flex:1 , width:"100%" , backgroundColor:"#ffffff", }}> 

     <View style={{flex:1 , width:"100%" , backgroundColor:"#ffffff", }}> 
      <SlideShowWithOutDisc/>
     </View>
          <SafeAreaView style={styles.container}>
          <FlatList
            ListHeaderComponent = {header}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={ () => { props.nav.navigate('Product', {
                                                   screen: 'Product',
                                                   params: { item }, 
                                                }); }} style={styles.item}>
            <Image
              style={styles.tinyLogo}
              source={{
              uri: `https://picsum.photos/50/50?random=${Math.floor(Math.random()*10 + 2)}`,
            }}
            />
          <Text style={styles.title}>{item.P_Name}</Text>
          </TouchableOpacity>
            )}
            numColumns={3}
            keyExtractor={(item) => item}
          />
        </SafeAreaView> 
        <View style={{flex:1 , width:"100%" , backgroundColor:"#ffffff", }}> 
          <SlideShow/>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // item: {
  //   padding: 10,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  //   borderRadius:25,
    
  // },
  mytxt: {
    fontSize: 32,
    padding: 30,
    textAlign: "center",
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 20,
  },
  headText:{
      fontWeight:"bold",
      fontSize:18,
      marginTop: 5,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.8
  },
  item: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: 130,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ffffff",
    borderRadius:5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title:{
 
    marginTop:10,

  },
  container: {
    flex: 1,
    backgroundColor:"#dcdcdc",
    
  },
  tinyLogo: {
    justifyContent:"flex-start",
    alignItems:"center",
    width: 70,
    height: 43,
    borderRadius:7,
  },
});

export default FltList;