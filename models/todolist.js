const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
});

const Todolist = mongoose.model('todolist', TodoSchema);
module.exports = Todolist;