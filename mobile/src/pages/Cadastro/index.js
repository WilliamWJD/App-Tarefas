import React, {useState} from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity, Alert, Switch } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../../services/api'

const Cadastro = ({navigation}) => {
    
    const cadastro=navigation.getParam('tarefas',{
        titulo:'',
        descricao:'',
        status:true
    })
    
    const [titulo, setTitulo]=useState(`${cadastro.titulo}`)
    const [descricao, setDescricao]=useState(`${cadastro.descricao}`)
    const [status, setStatus]=useState(`${cadastro.status}`)

    async function onSave(){
        const response=await api.post('/',{
            titulo:titulo,
            descricao:descricao,
            status:status
        })
        onClose()
    }

    async function onUpdate(){
        const response=await api.put(`/${cadastro._id}`,{
            titulo:titulo,
            descricao:descricao,
            status:status
        })
        onClose()
    }

    async function onDelete(){
        const response=await api.delete(`/${cadastro._id}`)
        onClose()
    }

    const onClose=(value)=>{
        navigation.goBack()
    }

    function toggleSwitch (value)  {
        setStatus(value)
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

            <Switch
                onValueChange={toggleSwitch}
                value={status}
            />

            <View style={styles.boxOptions}>
                <TouchableOpacity
                    style={styles.btnSalvar}
                    onPress={()=>{cadastro._id ? onUpdate() : onSave()}}
                >
                    <Text style={styles.textBtnSalvar}>
                        Salvar
                    </Text>
                </TouchableOpacity>

                {cadastro._id && (
                    <TouchableOpacity
                        style={styles.btnExcluir}
                        onPress={onDelete}
                    >
                        <Icon
                            name="delete"
                            size={35}
                            color={'#e74c3c'}
                            style={styles.iconPesq}
                        />
                    </TouchableOpacity>
                )}

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
        bottom: 0 ,
        justifyContent:"space-between"
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

    btnExcluir:{
        backgroundColor:'#ECF0F1',
        borderRadius:125,
        padding:5
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
