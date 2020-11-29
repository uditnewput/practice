const Todo = require('../models/models');

const index = (req,res)=>{
    var name = "";
    Todo.findAll().then(notes => {
      res.render('index',{notes});
    }).catch((err) => {
      res.redirect('/404');
    });
}

const todo_read = (req,res)=>{
  var name = req.query.name;
    Todo.findAll({ where: {username: name} }).then(notes => {
    res.render('todo',{notes});
  }).catch((err) => {
    res.redirect('/404');
  });
}

const todo_create = (req,res) => {
  const response = {
    username:req.body.username,
    data:req.body.note,
    status:'pending'
  }
  Todo.create(response).then((data) => {
    res.redirect('/todo?name='+req.body.username);
  }).catch((err) => {
    res.redirect('/404');
  });
}

const todo_delete = (req,res) => {
  Todo.findByPk(req.params.id).then((note) => {
    res.locals.username=note.username;
    return Promise.all([
      note.destroy(),
    ]).then(() => {
      res.redirect('/todo?name='+res.locals.username  )
    }).catch((err) => {
      res.redirect('/404');
    });
  }).catch((err) => {
    res.redirect('/404');
  });
}

const todo_status = (req,res) => {
  Todo.findByPk(req.params.id).then((note) => {
    note.update({
      status:'done'
    }).then((note) => {
    res.redirect('/todo?name='+note.username);
  }).catch((err) => {
    res.redirect('/404');
  });
  }).catch((err) => {
    res.redirect('/404');
  });
}

const todo_update = (req,res) => {
  Todo.findByPk(req.body.nid).then((note)=>{
    note.update({
      data:req.body.note
    }).then((note) => {
      res.redirect('/todo?name='+note.username);
    }).catch((err) => {
      res.redirect('/404');
    });
  }).catch((err) => {
    res.redirect('/404');
  });
}

const page_404 = (req,res) => {
  var name = "";
    Todo.findAll({ where: {username: name} }).then(notes => {
      res.status(404).render('404',{notes});
    });
}

module.exports = {
  index,
  todo_read,
  todo_create,
  todo_status,
  todo_delete,
  todo_update,
  page_404
}