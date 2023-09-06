import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <View>
        <Text style={styles.items}>{item.text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    items: {
      padding: 12,
      width: 265,
      borderWidth: 1,
      backgroundColor: "#000",
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
      margin: 12,
    }
  });
  
export default ListItem