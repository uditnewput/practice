const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine','ejs');
const Todo = require('./models/models');

//models

// routes
app.use(routes);

app.use((req,res) => {
  var name = "";
    Todo.findAll({ where: {username: name} }).then(notes => {
      res.status(404).render('404',{notes});
    });
})

//server
var server = app.listen(8080, function(){
  console.log("Listening on host: "+server.address().address+" & port: "+server.address().port);
});