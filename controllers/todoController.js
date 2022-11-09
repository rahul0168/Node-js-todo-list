module.exports.todo = function (req, res){

    Todolists.find({}, function(err, Todolists){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('todo',{
            title:"Todo List",
            todo_list: Todolists
        });
  
    })
    
    // return res.render('todo',{
    //     title:"Todo List",
    //     todo_list: todolist
    // });
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



