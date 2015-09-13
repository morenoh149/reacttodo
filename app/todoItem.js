import React from 'react'

const TodoItem = React.createClass({
  render() {
    var styles = {
      base: {
        textAlign: 'left'
      },
      input: {
        margin: '0 2em'
      },
      taskComplete: {
      },
      inputComplete: {
      }
    }

    return <div style={styles.base}>
        <input style={styles.input} type="checkbox" />
        <span>
          { this.props.task }
        </span>
      </div>
  }
})

export default TodoItem
