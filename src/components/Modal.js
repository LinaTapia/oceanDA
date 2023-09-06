import React from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'

const ModalComponent = ({modalVisible, setModalVisible, clearList}) => {
  return (
    <View>
        <Modal
            animationType='slide'
            visible={modalVisible}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>¿Estás seguro que deseas ELIMINAR la lista?</Text>
                <View style={styles.containerOptionModal}>
                <Pressable onPress={() => clearList()}>
                    <Text style={styles.textStyle}>SÍ</Text>
                </Pressable>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyle}>NO</Text>
                </Pressable>
                </View>
            </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      marginTop: 32,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    containerOptionModal: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  

export default ModalComponent