import React,{useState , useEffect} from "react";
import { View, Button, Text, StyleSheet ,ScrollView , TextInput } from "react-native";
import axios from 'axios'
import FltList from "./FlatList";
import EmptyScreen from "./NoData";
import SlideShow from "./SlideShow";
import SlideShowWithOutDisc from "./SlideShowWithOutDisc";
import { SafeAreaView } from "react-native";
import { All_Product_Api_Link } from "./ApiPath";

const Home = ({navigation}) => {


  const[ product , setProduct] = useState([]);
  const [lenValue , setLenValue] = useState(product.length);
  

   useEffect(()=>{
     axios.get(All_Product_Api_Link)
     .then( res => {  
       setProduct(res.data);
     })
     .catch( err => {console.log(err)})
   } , []);

   useEffect(()=>{
    
   setLenValue(product.length);
  } , [product.length]);
  
  return (
  
  
    <ScrollView  style={styles.container}>

    {( lenValue > 0) ?  <FltList  nav={navigation}  obj={product}/> : <EmptyScreen/>}
        
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#Fefefe',
  },
  container: {
    flex: 1,

    height: "auto",
   
    textAlign: "center",
  },
  center2: {
    height: 200,
    
    textAlign: "center",
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});

export default Home;