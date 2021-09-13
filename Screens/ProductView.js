import React from "react";
import {Text , Image} from "react-native";



export const Pro = () =>{

    return(
        <Text>No product Availabe</Text>

        // <Image style={{width: 50,height: 50,}} source={require('../uploads/1614649155503download.png')} />
    )
}

export const ProAvl = (props) =>{
    console.log(props.imageStr);
    const {icon} = props.imageStr;

    return(
        //  <Text>{props.imageStr}</Text>
         <Image style={{width: 50,height: 50,}} source={icon} />
    )
}
