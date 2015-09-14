var express = require('express');
var app = express();
var low = require('lowdb')
var db = low('db.json')
var bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());

// return all tasks
app.get('/todos', function(req, res){
  res.send(db('todos').value())
})

// create new task
app.post('/todos', function(req, res){
  res.status(200).send(db('todos').push(req.body))
})

// mark all tasks complete
app.put('/todos/finishall', function(req, res){
  // using forEach due to lowdb limitations
  db('todos').forEach(function(t){
    db('todos')
      .chain()
      .find({_id: t._id})
      .assign({ completed: true})
      .value()
  })
  res.status(200).send()
})

// mark task complete
app.put('/todos/:id', function(req, res){
  var task = req.body
  db('todos')
    .chain()
    .find({_id: task._id})
    .assign({ completed: task.completed })
    .value()
  res.status(200).send()
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
