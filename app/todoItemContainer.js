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
    return (
      <div style={styles.base} className='container'>
        { this.props.todos.map((task, index) => {
            return <TodoItem task={task} />
          })
        }
      </div>
    )
  }
})

export default TodoItemContainer
