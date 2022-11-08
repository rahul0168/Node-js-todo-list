module.exports.todo = function (req, res){
    return res.render('todo',{
        title:"Todo List"
    });
}
const Todolists = require('../models/todolist');

module.exports.todocreate = function(req,res)
{   console.log(req.body.description);
    Todolists.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date
    },function(err,newTask){
        if(err){
          console.log('error in creating');
          return;
        }
        console.log('*****',newTask);
        return res.redirect('/');
         });
}



