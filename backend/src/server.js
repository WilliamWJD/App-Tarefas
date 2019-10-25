const express=require('express')
const routes=require('./routes')
const mongoose=require('mongoose')

const app=express()

const port=3000

mongoose.connect('mongodb+srv://william:wjd123@cluster0-onnlg.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(express.json())
app.use(routes)

app.listen(port,(req,res)=>{
    console.log(`Servidor online na porta ${port}`)
})