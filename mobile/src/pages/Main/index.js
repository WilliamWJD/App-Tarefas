import React, {useState, useEffect} from 'react'
import { View, StyleSheet} from 'react-native'

import Pesquisa from '../../components/Pesquisa'
import ListaTarefas from '../../components/ListaTarefas'
import api from '../../services/api'

const Main = ({navigation}) => {

    const [tarefas, setTarefas]=useState([])

    useEffect(()=>{
        async function carregaTarefas(){
            const tarefas=await api.get('/')
            setTarefas(tarefas.data)
        }
        carregaTarefas()
    },[])

    return (
        <View style={styles.container}>
            <Pesquisa navigation={navigation}/>
            <ListaTarefas 
                tarefas={tarefas}
                navigation={navigation}    
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2980B9',
        padding:20
    }
})

export default Main
