const express = require('express');
const app = express();
const port = 8080;

//ue express router
app.use('/', require('./routes'));
const db = require('./config/mongoose');

//EJS Template
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
