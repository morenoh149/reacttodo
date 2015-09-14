require("./style.css")
require("../node_modules/react-dragula/dist/dragula.css")

import React from 'react'
import AddTodo from './addTodo.js'
import TodoItemContainer from './todoItemContainer.js'
import Footer from './footer.js'

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
      todos: [{
          text: 'Discuss report with john',
          completed: false
        },{
          text: 'Get a haircut',
          completed: true
        },{
          text: 'Pay electricity bill',
          completed: true
        },{
          text: 'Check gym hours',
          completed: false
        }
      ]
    }
  },
  addTask(task) {
    if(task.text) {
      this.state.todos.push(task)
      this.setState(this.state)
    }
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
        <Footer tasksRemaining={tasksRemaining} />
      </div>
    )
  }
})

React.render(<App />, document.getElementById('content'))
