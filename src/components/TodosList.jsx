import React from 'react'
import { connect } from 'react-redux';
import './TodoList.css';

function filterTodos(todos, filter) {

    if (filter === 'ALL') {
        return todos

    }
    if (filter === 'COMPLETED') {
        return todos.filter(todo => todo.completed)

    }
    if (filter === 'NO_COMPLETED') {
      return todos.filter((todo) => !todo.completed);
    }

}

function TodoList(props) {
    return (
      <div className='todoList'>
        {filterTodos(props.todos,props.filter).map((todo) => (
          <div className='todo' key={todo.id}>
            <div className='id'>{todo.id}</div>
            <div className='text'>{todo.text}</div>
            <div className='isCompleted'>
              {todo.completed ? 'completed' : ''}
            </div>
          </div>
        ))}
      </div>
    );

}


const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibility,
});


const connected = connect(
  mapStateToProps
)(TodoList);

export default connected;
