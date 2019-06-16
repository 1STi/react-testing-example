// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Modules
import { updateTask } from '../modules/click-module';

//Styles
import './todo.css';

const mapStateToProps = (store) => ({
  newValue: store.TodoList.newValue
});

const mapDispatchToProps = dispatch => ({
  updateTask: (value) => {
    dispatch(updateTask(value));
  },
});

class Todo extends Component {
  state = {
    myTask: '',
    tasks: [],
  };

  handleClick = (ev) => {
    console.log(this.state.myTask)
    this.props.updateTask(this.state.myTask);
    this.handleNewTask();
  }

  handleChange = (ev) => {
    this.setState({
      myTask: ev.target.value
    });
  }

  handleNewTask = () => {
    this.setState({
      tasks: this.state.tasks.concat({
        text: this.state.myTask,
        done: false,
      }),
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
    const { newValue } = this.props;
    return this.state.tasks.map((task, index) => {
      return (
        <li
          key={index}
        > 
          {newValue}
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
    const { myTask } = this.state;
    
    return (
      <div className="Todo">
        <h2>My Todo List</h2>
        <div>
          <input
            type='text'
            value={myTask}
            onChange={this.handleChange}
            data-testid='my-input'
          >
          </input>
          <button 
            className="Todo_btns"
            onClick={this.handleClick}
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);