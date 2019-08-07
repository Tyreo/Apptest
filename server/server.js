const express = require('express')
const mongoose = require("mongoose")
const DB_URL = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URL,{ useNewUrlParser: true })
mongoose.connection.once('open',function () {
    console.log('mongo connect success')
})
const userModel = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type: Number,require: true}
}))
/*userModel.create({
    user:'li',
    age:27
},function (err,doc) {
    if (!err){
        console.log(doc)
    }else {
        console.log(err)
    }
})*/
/*const stu = new userModel({
    user: 'li',
    age:27
})
stu.save()*/
/*userModel.remove({},function (err,doc) {
    console.log(doc)
})*/
userModel.findOne({},"-_id",function (err,doc) {
    console.log(doc)
})
const app = express()
app.get('/',function (req,res) {
    res.send('<h1>Hello world</h1>')
})
app.get('/data',function (req,res) {
        userModel.find({},function (err,doc) {
        res.json(doc)
    })
    // res.json({name:'imooc react test',type:'IT'})
})
app.listen(9093,function () {
    console.log('Node app start at port 9093')
})
