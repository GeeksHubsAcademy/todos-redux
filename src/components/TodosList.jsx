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
        {filterTodos(props.todos, props.filter).map((todo) => (
          <div
            className={`todo ${
              todo.completed ? 'completed' : ''
            }`}
            key={todo.id}
          >
            <div className='data'>
              <div className='text'>{todo.text}</div>
            </div>
            <div className='actions'>
              <button
                onClick={() => props.toggleCompleted(todo.id)}
              >
                {!todo.completed ? ' complete' : '✔️ uncomplete'}
              </button>
              <button
                onClick={() => props.delete(todo.id)}
              >
                {'❌ delete'}
              </button>
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

const mapDispatchToProps = (dispatch) => ({
  toggleCompleted: (id) =>
    dispatch({
      type: 'TOGGLE_COMPLETED_TODO',
      payload: id,
    }),
  delete: (id) =>
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    }),
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default connected;
