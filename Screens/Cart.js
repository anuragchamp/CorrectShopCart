import React from "react";
import { View, StyleSheet, Text ,Button } from "react-native";
import { ScreenContainer } from "react-native-screens";

const Cart = ({route , navigation}) => {
 
  return (
    <View style={styles.center}>
      <Text>This is the Cart screen {route.name}</Text>
      <Button title={route.name} onPress= { () => navigation.navigate("Browse")} />
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
});

export default Cart;