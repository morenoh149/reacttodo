var express = require('express');
var app = express();
var low = require('lowdb')
var db = low('db.json')

app.use(express.static('dist'));

// return all tasks
app.get('/todos', function(req, res){
  res.send(db('todos').value())
})

// create new task
app.post('/todos', function(req, res){
})

// mark task complete
app.put('/todos/:id', function(req, res){
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
