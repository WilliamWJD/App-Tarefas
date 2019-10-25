const {Schema, model}=require('mongoose')

const TarefaSchema=new Schema({
    titulo:{
        type:String,
        required:true
    },
    descricao:{
        type:String
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})

module.exports=model('Tarefa', TarefaSchema)