import React from 'react'

const TodoItem = React.createClass({
  render() {
    return <div>task: { this.props.task }</div>
  }
})

export default TodoItem
