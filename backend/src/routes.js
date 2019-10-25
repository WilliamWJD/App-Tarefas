const express=require('express')
const TarefaController=require('./controller/TarefaController')

const Routes=express.Router()

Routes.post('/', TarefaController.save)
Routes.get('/', TarefaController.getAll)
Routes.get('/:id_tarefa', TarefaController.get)
Routes.put('/:id_tarefa', TarefaController.atualiza)
Routes.delete('/:id_tarefa', TarefaController.exclui)

module.exports=Routes