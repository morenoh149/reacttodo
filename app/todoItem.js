import React from 'react'

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
  input: {
    margin: '1em 2em'
  }
}

const TodoItem = React.createClass({
  handleCheck(event){
    this.props.toggleTask(this.props.task)
  },
  render() {
    if(this.props.task.completed) {
      var text = <div style={styles.textComplete}>{ this.props.task.text }</div>
    } else {
      var text = <div style={styles.textIncomplete}>{ this.props.task.text }</div>
    }

    return <div style={styles.base} className="task">
        <input
          style={styles.input}
          type="checkbox"
          defaultChecked={this.props.task.completed}
          onChange={this.handleCheck} />
        { text }
        <div style={styles.arrow} className="arrow">
          &#x21D5;
        </div>
      </div>
  }
})

export default TodoItem
