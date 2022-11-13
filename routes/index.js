const express = require('express');
const router = express.Router();
//controllers
const todoContoller = require('../controllers/todoController');
router.use(express.urlencoded());

//routes
router.get('/',todoContoller.todo);

router.post('/create-task',todoContoller.todocreate);



// THIS IS DELETE URL FOR SINGLE TASK FROM DATABASE
router.get('/delete_todo_single', todoContoller.singleDelete);

// THIS IS URL TO DELETE THE MULTIPLE ITEM FROM DATABASE
router.post('/delete-todo', todoContoller.multipleDelete);
//router.use('/users',require('./users'));
module.exports = router;