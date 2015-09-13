require("./style.css")
require("../node_modules/react-dragula/dist/dragula.css")

import React from 'react'
import AddTodo from './addTodo.js'
import TodoItemContainer from './todoItemContainer.js'
import Footer from './footer.js'

var styles = {
  base: {
    background: 'white',
    textAlign: 'center',
    width: '80vw',
    margin: '0 auto',
    borderRadius: '5px',
    border: '1px solid #eee'
  },
  heading: {
    padding: '1em 0',
    borderBottom: '1px dashed #ccc'
  }
}

/*
 * Top level Component
 */
const App = React.createClass({
  getInitialState() {
    return {
      todos: [1,2,3,4]
    }
  },
  render() {
    return (
     <div style={styles.base}>
        <h1 style={styles.heading}>Todos</h1>
        <AddTodo />
        <TodoItemContainer todos={this.state.todos} />
        <Footer />
      </div>
    )
  }
})

React.render(<App />, document.getElementById('content'))
