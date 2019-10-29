import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Switch } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../../services/api'

const Cadastro = ({ navigation }) => {

    const cadastro = navigation.getParam('tarefas', {
        titulo: '',
        descricao: '',
        status: false
    })

    const [titulo, setTitulo] = useState(`${cadastro.titulo}`)
    const [descricao, setDescricao] = useState(`${cadastro.descricao}`)
    const [status, setStatus] = useState(`${cadastro.status}`)

    async function onSave() {
        const response = await api.post('/', {
            titulo: titulo,
            descricao: descricao,
            status: status
        })
        onClose()
    }

    async function onUpdate() {
        const response = await api.put(`/${cadastro._id}`, {
            titulo: titulo,
            descricao: descricao,
            status: status
        })
        onClose()
    }

    async function onDelete() {
        const response = await api.delete(`/${cadastro._id}`)
        onClose()
    }

    const onClose = (value) => {
        navigation.goBack()
    }

    function toggleSwitch(value) {
        setStatus(value)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Digite um título"
                placeholderTextColor="#ECF0F1"
                style={styles.input}
                onChangeText={(titulo) => setTitulo(titulo)}
                value={titulo}
            />

            <TextInput
                placeholder="Digite uma decrição"
                placeholderTextColor="#ECF0F1"
                style={styles.input}
                onChangeText={(descricao) => setDescricao(descricao)}
                value={descricao}
            />

            <Switch
                trackColor={
                    {
                        true:'#67E09A', 
                        false: '#ECF0F1',
                    }
                }
                thumbColor={
                    {
                        false:'#E74C3C'
                    }
                }
                onValueChange={toggleSwitch}
                value={cadastro.status}
            />

            <View style={styles.boxOptions}>
                <TouchableOpacity
                    style={styles.btnSalvar}
                    onPress={() => { cadastro._id ? onUpdate() : onSave() }}
                >
                    <Icon
                        name="save"
                        size={35}
                        color={'#3498DB'}                    
                    />
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
                            
                        />
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={styles.btnCancelar}
                    onPress={onClose}
                >
                    <Icon
                        name="close"
                        size={35}
                        color={'#9B59B6'}             
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980B9',
        padding: 20
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#ECF0F1',
        color: '#ecf0f1',
        marginBottom: 30
    },

    boxOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        marginTop:20
    },

    btnSalvar: {
        backgroundColor: '#ECF0F1',
        borderRadius: 120,
        padding: 15,
        borderWidth:3,
        borderColor:'#3498DB',
    },

    btnExcluir: {
        backgroundColor: '#ECF0F1',
        borderRadius: 120,
        padding: 15,
        borderWidth:3,
        borderColor:'#3498DB',
        marginLeft:15
    },

    btnCancelar:{
        backgroundColor: '#ECF0F1',
        borderRadius: 120,
        padding: 15,
        borderWidth:3,
        borderColor:'#3498DB',
        marginLeft:15
    }
})

export default Cadastro
