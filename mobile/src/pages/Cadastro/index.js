import React, {useState} from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import api from '../../services/api'

const Cadastro = ({navigation}) => {
    
    const cadastro=navigation.getParam('tarefas',{
        titulo:'',
        descricao:'',
        createdAt:new Date(),
        updatedAt:new Date()
    })

    const [titulo, setTitulo]=useState(`${cadastro.titulo}`)
    const [descricao, setDescricao]=useState(`${cadastro.descricao}`)

    async function onSave(){
        const response=await api.post('/',{
            titulo:titulo,
            descricao:descricao
        })
        console.log(JSON.stringify(response.data))
    }

    const onClose=()=>{
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Digite um título"
                placeholderTextColor="#ECF0F1"
                style={styles.input}
                onChangeText={(titulo)=>setTitulo(titulo)}
                value={titulo}
            />

            <TextInput
                placeholder="Digite uma decrição"
                placeholderTextColor="#ECF0F1"
                style={styles.input}
                onChangeText={(descricao)=>setDescricao(descricao)}
                value={descricao}
            />

            <View style={styles.boxOptions}>
                <TouchableOpacity
                    style={styles.btnSalvar}
                    onPress={onSave}
                >
                    <Text style={styles.textBtnSalvar}>
                        Salvar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCancelar}
                    onPress={onClose}
                >
                    <Text style={styles.textBtnCancelar}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2980B9',
        padding:20
    },

    input:{
        borderBottomWidth:1,
        borderColor:'#ECF0F1',
        color:'#ecf0f1',
        marginBottom:30
    },

    boxOptions:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        bottom: 0 
    },

    btnSalvar:{
        alignItems:'center',
        marginRight:20,
        backgroundColor:'#ECF0F1',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:77,
        width:'36%',
        borderWidth:2,
        borderColor:'#27AE60'
    },

    textBtnSalvar:{
        fontSize:15,
        color:'#27AE60',     
    },

    textBtnCancelar:{
        color:'#ECF0F1',
        fontSize:15
    }
})

export default Cadastro
