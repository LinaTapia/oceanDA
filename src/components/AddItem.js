import { View, TextInput, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const AddItem = ({text, onChangeText, addItem}) => {
    return (
       <View style={styles.containerInput}>
            <TextInput style={styles.input}  
            placeholder='Ingrese Producto'    
            onChangeText={(value) => onChangeText(value)}
            value={text}/>

            <Pressable onPress={() => addItem()} style={styles.add}>
                <Ionicons name='add' size={24} color='white' />
            </Pressable>
        </View>
      );
}


const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    add: {
      height: 40,
      width: 40,
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default AddItem