import React from 'react'
import { View, Text, TextInput , StyleSheet } from 'react-native'

import ListaTarefas from '../../components/ListaTarefas'

const Main = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputPesquisa}
                placeholder="Encontre uma tarefa"
                placeholderTextColor="#95A5A6"
            />
            <ListaTarefas/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2980B9',
        padding:20
    },
    inputPesquisa:{
        width:'100%',
        borderRadius:3,
        backgroundColor:'#ECF0F1'
    }
})

export default Main
