const Sequelize = require('sequelize');

var sequelize = new Sequelize('todo', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  username: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Todo.sync({}).then(function () {
  // Table created
  console.log('SYNC working...')
}).catch((err)=>console.log(err));

module.exports = Todo;