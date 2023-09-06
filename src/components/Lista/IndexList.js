import { View, Text, FlatList, Pressable, StyleSheet, Dimensions  } from 'react-native'
import React from 'react'
import ListItem from './ListItem';

const IndexList = ({list, setModalVisible}) => {
  return (
    <View style={styles.container}>
        <FlatList
        data={list}
        renderItem={({item}) => <ListItem item={item}/>}
        keyExtractor={item => item.id}
        />
        <Pressable onPress={() => setModalVisible(true)} style={styles.delete}>
            <Text>Eliminar</Text>
        </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    position: 'relative',
    height: 700
  },
    delete:{
      bottom: 0,
      backgroundColor: '#FFF',
      color: '#000',
      borderWidth: 1,
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
});
  

export default IndexList