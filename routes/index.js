const express = require('express');
const router = express.Router();
//controllers
const todoContoller = require('../controllers/todoController');

//routes
router.get('/',todoContoller.todo);

router.post('/create-task',todoContoller.todocreate);

//router.use('/users',require('./users'));
module.exports = router;