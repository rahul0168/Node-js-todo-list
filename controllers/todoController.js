const Todolists = require('../models/todolist');
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
    
}

//create list
module.exports.todocreate = function(req,res)
{   
    Todolists.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date
    },function(err,newTask){
        if(err){
          console.log('error in creating');
          return;
        }
        return res.redirect('/');
         });
}

//single delete
module.exports.singleDelete = function(req, res) {
    let id = req.query.id;
    Todolists.findByIdAndDelete(id, function(err){
        if(err) {
            console.log("error");
            return;
        }
        return res.redirect('back');
    });
}

//Multiple delete
module.exports.multipleDelete =function(req, res) {
    let ids = req.body.task;
    // if single task is to be deleted
    if (typeof(ids) == "string") {
        Todolists.findByIdAndDelete(ids, function(err) {
            if (err) { 
                console.log("error in deleting"); 
                return; 
            }
        });
    } else {    // if multiple task is to be deleted
        for (let i = 0; i < ids.length; i++) {
            Todolists.findByIdAndDelete(ids[i], function (err) {
                if (err) { 
                    console.log("error in deleting");
                    return; 
                }
            });
        }
    }
    return res.redirect('back');
}



