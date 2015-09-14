require("./style.css")
require("../node_modules/react-dragula/dist/dragula.css")

import React from 'react'
import AddTodo from './addTodo.js'
import TodoItemContainer from './todoItemContainer.js'
import Footer from './footer.js'
import request from 'superagent'

var styles = {
  base: {
    background: 'white',
    width: '80vw',
    margin: '0 auto',
    borderRadius: '5px',
    border: '1px solid #eee'
  },
  heading: {
    padding: '1em 0',
    margin: 0,
    textAlign: 'center',
    borderBottom: '1px dashed #ccc'
  }
}

/*
 * Top level Component
 */
const App = React.createClass({
  getInitialState() {
    return {
      todos: [{ _id: 1, text: 'Demo', completed: false },
              { _id: 2, text: 'Demo', completed: true }
             ]
    }
  },
  componentDidMount() {
    request
      .get('/todos')
      .end((err, res) => {
        if(res.ok){
          this.setState({ todos: res.body })
        } else {
          console.log(err)
        }
      })
  },
  addTask(task) {
    if(task.text) {
      task._id = this.state.todos.length + 1
      this.state.todos.push(task)
      this.setState(this.state)
      request
        .post('/todos')
        .send(task)
        .end(function(err, res){
          if(res.status !== 200){
            console.log('task not persisted to backend')
          }
        })
    }
  },
  clearTasks(){
    this.setState({
      todos: this.state.todos.map(function(e){
        e.completed = true
        return e
      })
    })
    request
      .put('/todos/finishall')
      .end()
  },
  toggleTask(task) {
    var newTodos = this.state.todos.map(function(e){
      if(e === task) {
        e.completed = !e.completed
      }
      return e
    })
    this.setState({
      todos: newTodos
    })
    request
      .put('/todos/' + task._id)
      .send(task)
      .end()
  },
  render() {
    var tasksRemaining = this.state.todos.filter(function(e){
      return !e.completed
    }).length

    return (
     <div style={styles.base}>
        <h1 style={styles.heading}>Todos</h1>
        <AddTodo addTask={this.addTask} />
        <TodoItemContainer
          todos={this.state.todos}
          toggleTask={this.toggleTask} />
        <Footer
          tasksRemaining={tasksRemaining}
          clearTasks={this.clearTasks}
          />
      </div>
    )
  }
})

React.render(<App />, document.getElementById('content'))
