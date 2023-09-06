import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import ListItem from './ListItem';

const IndexList = ({list, setModalVisible}) => {
  return (
    <View>
        <FlatList
        data={list}
        renderItem={({item}) => <ListItem item={item}/>}
        keyExtractor={item => item.id}
        />
        <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.delete}>Eliminar</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    delete:{
      backgroundColor: "#FFF",
      color: "#000",
      borderWidth: 1,
      width: 265,
      padding: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      fontWeight: "bold",
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  });
  

export default IndexList