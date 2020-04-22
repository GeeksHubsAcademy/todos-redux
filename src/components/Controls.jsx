import React from 'react';
import { connect } from 'react-redux';
import './Controls.css';

function Controls(props) {
    const addTodo = e => {
        if (e.keyCode === 13 && e.target.value.trim()) {
          props.addTodo(e.target.value.trim());
          e.target.value = '';
        }
    }
  return (
    <div className='controls'>
      <input
        type='text'
        placeholder='add todo here'
        onKeyUp={(e) => addTodo(e)}
      />
      <div>
        <button onClick={() => props.changeVisibility('ALL')}>
          Show All
        </button>
        <button
          onClick={() => props.changeVisibility('COMPLETED')}
        >
          Show Completed
        </button>
        <button
          onClick={() => props.changeVisibility('NO_COMPLETED')}
        >
          Show No Completed
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) =>
    dispatch({
      type: 'ADD_TODO',
      payload: text,
      completed: Math.random() > 0.5 ? true : false,
      id: Date.now(),
    }),
  changeVisibility: (setting) =>
        dispatch({
            type: 'CHANGE_VISIBILITY',
            payload: setting
        })
});

const connected = connect(
  null,
  mapDispatchToProps,
)(Controls);

export default connected;
