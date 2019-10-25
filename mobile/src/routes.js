import {createAppContainer, createSwitchNavigator}from 'react-navigation'

import Main from './pages/Main'
import Cadastro from './pages/Cadastro'

const Routes=createAppContainer(
    createSwitchNavigator({
        Main,
        Cadastro
    },{
        initialRouteName:'Main',
        backBehavior:'order'
    })
)

export default Routes