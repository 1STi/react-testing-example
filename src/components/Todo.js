// Libs
import React, { Component } from 'react';

import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

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

  handleRemoveTask = (task) => {
    const removeTask = this.state.tasks.filter(tasks => {
      return tasks !== task;
    });

    this.setState({
      tasks: [...removeTask]
    })
  }


  renderTasks = () => {
    return this.state.tasks.map((task, index) => {
      return (
        <li
          key={index}
        >
          {task}
          <button
            className="Todo_btns"
            onClick={(e)=> this.handleRemoveTask(task)}
            data-testid='remove-button'
          >
          Remove
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="Todo">
        <h2>My Todo List</h2>
        <div>
          <input
            type='text'
            value={this.state.myTask}
            onChange={this.handleChange}
            data-testid='my-input'
          />
          <button 
            className="Todo_btns"
            onClick={this.handleNewTask}
            data-testid='my-button'
          >
            Add
          </button>
          <ul 
            className="Todo_list"
            data-testid='my-list'
          >
            {this.renderTasks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;