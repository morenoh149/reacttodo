import React from 'react'
import TodoItem from './todoItem.js'

var styles = {
  base: {
    minHeight: '300px',
    borderBottom: '1px dashed #ccc'
  }
}

const TodoItemContainer = React.createClass({
  render() {
    var todos = [1,2,3,4]
    return (
      <div style={styles.base}>
        { todos.map((t) => {
            return <TodoItem />
          })
        }
      </div>
    )
  }
})

export default TodoItemContainer
