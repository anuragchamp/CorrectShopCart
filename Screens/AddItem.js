import React,{useState} from 'react';
import { View, Text, StyleSheet , TextInput , Button ,Modal, Platform,ScrollView , TouchableHighlight } from 'react-native';

const AddItem  = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const[priceQuantitymap , setPriceQuantityMap ] = useState( {} ) 
  return (
    <ScrollView >
       <Text style={styles.txtshadow}>Add Item Page</Text>
      
       <Text style={styles.txtshadow}>Product Name</Text>
      <TextInput  
            style={styles.inputText}  
      />
       <Text style={styles.txtshadow}>Category</Text>
      <TextInput  
            style={styles.inputText}  
      />
       <Text style={styles.txtshadow}>Description</Text>
      <TextInput  
            style={styles.inputText}
      />
       <Text style={styles.txtshadow}>Price</Text>
      <TextInput  
            style={styles.inputText}
      />
      <Text style={styles.txtshadow}>Stocks</Text>
      <TextInput  
            style={styles.inputText}
      />
     {/* Modal */}
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput  
            style={styles.inputText}
          />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputText:{
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    color: '#fff'
  },
  txtshadow:{
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
  }
});

export default AddItem;
