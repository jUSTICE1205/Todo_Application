const express = require ('express');
const cors = require ('cors');
const {createTodoCheck, updateTodoCheck} = require('./types');
const {todoModel } = require('./connectDB.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.json())
app.use(cors());

app.post("/todo", async function(req, res) {

    console.log("get")
    const createTodoData = req.body;
    console.log(createTodoData);
    
    if(!createTodoCheck.safeParse(createTodoData).success) {
        res.status(411).json({
            status:411,
            message: "Invalid title or description"
        })    
    }

    await todoModel.create({
        title: createTodoData.title,
        description: createTodoData.description,
        completed : false

    })

    res.json({
        message: "Todo Created"
    })
})

app.get("/todos", async function(req, res) {

    const todos = await todoModel.find({})
     

     res.json({todos});

})

app.put("/completed", async function(req, res) {
    const updateData = req.body;


    try {
        await todoModel.updateOne(
            { _id: updateData.id },
            { completed: true }
        );
        res.json({ message: "Todo marked as completed" });
    } catch (error) {
        console.error("Error marking todo as completed:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/delete", async function(req, res) {
    const todoId = req.body.id; // Extract todo ID from request body
console.log(todoId);
    try {
        await todoModel.findOneAndDelete({ _id: todoId });
        res.json({ message: "Todo is deleted" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = 8080;

app.listen(PORT, ()=> {

})