const Tarefa=require('../model/Tarefa')

module.exports={
    async save(req,res){
        const tarefa=await Tarefa.create(req.body)
        return res.json(tarefa)       
    },

    async getAll(req,res){
        const tarefa=await Tarefa.find()
        return res.json(tarefa)
    },

    async get(req,res){
        const {id_tarefa}=req.params
        const tarefa=await Tarefa.find({_id:id_tarefa})
        return res.json(tarefa)
    },

    async atualiza(req,res){
        const {id_tarefa}=req.params
        const tarefa=await Tarefa.update({_id:id_tarefa},req.body)
        return res.json(tarefa)
    },

    async exclui(req,res){
        const {id_tarefa}=req.params
        const tarefa=await Tarefa.deleteOne({_id:id_tarefa})
        return res.json(tarefa)
    }
}