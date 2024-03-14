const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://clavan:Clavan123@cluster0.5xuy3ak.mongodb.net/Todo-Application")

const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model('todos', todoSchema)

module.exports = {
    todoModel
}



