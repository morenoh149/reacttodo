import React from 'react'

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row'
  },
  count: {
    flexGrow: 1,
    padding: '15px',
    color: '#777'
  },
  clearer: {
    padding: '15px',
    textDecoration: 'none',
    color: 'blue'
  }
}

const Footer = React.createClass({
  render() {
    return <div className="footer" style={styles.base}>
      <span style={styles.count}>
        {this.props.tasksRemaining} items left
      </span>
      <a style={styles.clearer}>Mark all as complete</a>
    </div>
  }
})

export default Footer
