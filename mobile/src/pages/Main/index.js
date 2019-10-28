import React from 'react'
import { View, StyleSheet} from 'react-native'

import Pesquisa from '../../components/Pesquisa'
import ListaTarefas from '../../components/ListaTarefas'

const Main = ({navigation}) => {

    const dados=[
        {titulo:'Pagar conta de energia', descricao:'Realizar o pagamento da conta de nergia', status:false},
        {titulo:'Tirar o lixo', descricao:'Tirar o lixo na parte da manhã', status:true},
        {titulo:'Trocar as cordas do vioão', descricao:'Troca do acordamento e limpeza do violão', status:true},
        {titulo:'Estudar JS', descricao:'Iniciar rotina de estudos em JS', status:false}
    ]

    return (
        <View style={styles.container}>
            <Pesquisa navigation={navigation}/>
            <ListaTarefas dados={dados}/>
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
