import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import Check from '../../assets/check.png'
import notCheck from '../../assets/notCheck.png'

const ListaTarefas = ({dados}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                renderItem={({item})=>(
                    <TouchableOpacity 
                        style={styles.boxTarefa}
                    >
                        <Image source={item.status ? Check : notCheck} style={styles.IconCheck}/>
                        <View>
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                        </View>    
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },  

    boxTarefa:{
        width:'100%',
        height:80,
        backgroundColor:'#ECF0F1',
        borderRadius:15,
        paddingHorizontal:12,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:14
    },

    IconCheck:{
        marginRight:15,
        width:30,
        height:30,
    },

    titulo:{
        color:'#2C3E50',
        fontSize:17,
        fontFamily:'Roboto'
    },

    descricao:{
        color:'#7F8C8D'
    }
})

export default ListaTarefas
