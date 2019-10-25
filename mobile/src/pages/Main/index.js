import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import ListaTarefas from '../../components/ListaTarefas'

const Main = () => {

    const dados=[
        {titulo:'Pagar conta de energia', descricao:'Realizar o pagamento da conta de nergia', status:false},
        {titulo:'Tirar o lixo', descricao:'Tirar o lixo na parte da manha', status:true},
        {titulo:'Trocar as cordas do vioão', descricao:'Troca do acordamento e limpeza do violão', status:true},
        {titulo:'Estudar JS', descricao:'Iniciar rotina de estudos em JS', status:false}
    ]

    return (
        <View style={styles.container}>
            <View style={styles.boxPesquisa}>
                <View
                    style={styles.inputPesquisa}
                >
                    <Icon 
                        name="search" 
                        size={30} 
                        color={'#95A5A6'}
                        style={styles.iconPesq}
                    />       
                    <TextInput                      
                        placeholder="Encontre uma tarefa"
                        placeholderTextColor="#95A5A6"
                    />
                </View> 
                <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.add}
                >               
                    <Icon name="add" size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
            <ListaTarefas dados={dados}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2980B9',
        padding:20
    },

    boxPesquisa:{
        flexDirection:'row'
    },

    inputPesquisa:{
        flexDirection:'row',
        backgroundColor:'#ECF0F1',
        borderRadius:3,
        width:'85%',
        height:40,
        alignItems:'center',
    },

    iconPesq:{
        marginLeft:4
    },

    add:{
        backgroundColor:'#2ECC71',
        width:50,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginLeft:10
    }
})

export default Main
