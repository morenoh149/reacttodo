import React from 'react'

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    flexGrow: 1,
    margin: '1em',
    height: '2em',
    fontSize: '1em',
    borderRadius: '5px'
  },
  button: {
    margin: '1em 1em 1em 0',
    padding: '0 20px',
    fontSize: '1em',
    borderRadius: '5px'
  }
}
const AddTodo = React.createClass({
  getInitialState() {
    return { value: '' }
  },
  handleChange(event) {
    this.setState({value: event.target.value})
  },
  handleClick(event) {
    var newTask = {
      text: this.state.value,
      completed: false
    }
    this.props.addTask(newTask)
    this.state.value = ''
  },
  render() {
    return <div style={styles.base}>
      <input
        id="newTask"
        style={styles.input}
        type="text"
        placeholder="what needs to be done?"
        value={this.state.value}
        onChange={this.handleChange} >
      </input>
      <button
        style={styles.button}
        onClick={this.handleClick} >
        Add Todo
      </button>
    </div>
  }
})

export default AddTodo
