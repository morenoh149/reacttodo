import React from 'react'
import TodoItem from './todoItem.js'
import dragula from 'react-dragula'

var styles = {
  base: {
    minHeight: '300px',
    borderBottom: '1px dashed #ccc'
  }
}

const TodoItemContainer = React.createClass({
  componentDidMount() {
    var container = React.findDOMNode(this)
    dragula([container])
  },

  render() {
    var todos = [1,2,3,4]
    return (
      <div style={styles.base} className='container'>
        { todos.map((t) => {
            return <TodoItem task={t}/>
          })
        }
      </div>
    )
  }
})

export default TodoItemContainer
