import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Pesquisa = ({navigation}) => {
    return (
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
                onPress={() => {navigation.navigate('Cadastro')}}
                style={styles.add}
            >
                <Icon name="add" size={30} color={'white'} />
            </TouchableOpacity>
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

export default Pesquisa
