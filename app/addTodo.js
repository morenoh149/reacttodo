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
  render() {
    return <div style={styles.base}>
      <input style={styles.input} type="text" placeholder="what needs to be done?"></input>
      <button style={styles.button}>Add Todo</button>
    </div>
  }
})

export default AddTodo
