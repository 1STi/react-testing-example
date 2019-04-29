// Libs
import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myTask: '',
      tasks: [],
    };
  }

  handleChange = (ev) => {
    this.setState({
      myTask: ev.target.value
    });
  }

  handleNewTask = () => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.myTask),
      myTask: '',
    });
  }

  renderTasks = () => {
    return this.state.tasks.map((task, index) => {
      return (
        <li
          key={index}
        >
          {task}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <input
          type='text'
          value={this.state.myTask}
          onChange={this.handleChange}
          data-testid='my-input'
        />
        <button
          onClick={this.handleNewTask}
          data-testid='my-button'
        >
          Add
        </button>
        <ul
          data-testid='my-list'
        >
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default Todo;