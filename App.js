import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView} from "react-native";
import AddItem from './src/components/AddItem';
import ModalComponent from './src/components/Modal';
import IndexList from './src/components/Lista/IndexList';

export default function App() {
  const initialState = [{id: 1, text: 'Tapón Oceano'},{id: 2, text: 'Tunel Negro'},{id: 3, text: 'Tapón Humo Negro'}]
  const [text, onChangeText] = useState("")
  const [list, setList] = useState(initialState)
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = () => {
    if(text == "") return
    list.push({id: Math.random(), text: text})
    setList(list)
    onChangeText("")
  }

  const clearList = () => {
    setList([])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.importantText}>Lista de compras</Text>
      <AddItem text={text} onChangeText={onChangeText} addItem={addItem}/>
      <IndexList list={list} setModalVisible={setModalVisible}/>
      <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} clearList={clearList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "start",
  },
  importantText: {
    fontSize: 32,
    fontWeight: "bold",
  }
});
