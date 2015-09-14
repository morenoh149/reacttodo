import React from 'react'

const TodoItem = React.createClass({
  render() {
    var styles = {
      base: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      arrow: {
        padding: '0 10px'
      },
      textComplete: {
        flexGrow: 1,
        textDecoration: 'line-through',
        color: '#ccc'
      },
      textIncomplete: {
        flexGrow: 1
      },
      inputComplete: {
        margin: '1em 2em'
      },
      inputIncomplete: {
        margin: '1em 2em'
      }
    }
    if(this.props.task.completed) {
      var input = <input style={styles.inputComplete} type="checkbox" checked />
      var text = <div style={styles.textComplete}>{ this.props.task.text }</div>
    } else {
      var input = <input style={styles.inputIncomplete} type="checkbox" />
      var text = <div style={styles.textIncomplete}>{ this.props.task.text }</div>
    }

    return <div style={styles.base} className="task">
        { input }
        { text }
        <div style={styles.arrow} className="arrow">
          &#x21D5;
        </div>
      </div>
  }
})

export default TodoItem
