import React, { useEffect, useState } from "react";
import {View,Image , Text} from "react-native"
import { Pro, ProAvl } from "./ProductView";


export default  Product =  (route) => {

    const[path , setPath] = useState('');
    const[imagePath , setImagePath] = useState({});
    
    useEffect(()=>{
        console.log("gg")
        console.log(route.route.params.item.img);
        setPath(route.route.params.item.img);
       setImagePath({...imagePath , p:`../uploads/${route.route.params.item.img}` })
       console.log(imagePath);
    
     } , [route])


     return(
         <View>
             <Text>The is product image {route.route.params.item.img}</Text>
             {/* <Image style={{width: 50,height: 50,}} source={require(imagePath.p)} /> */}
             {/* {
                 (path.includes(".jpg")) ? <ProAvl imageStr={path} /> : <Pro /> 
             } */}
         </View>
     )
    // if(imagePath){
    //     return(
    //         <Pro />
    //     )
    // }
    // else{
    //     return(
    //         <ProAvl />
    //     )
    // }
        
    
}