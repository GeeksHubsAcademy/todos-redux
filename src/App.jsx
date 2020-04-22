import React from 'react';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
          <pre>
            {
              JSON.stringify(props, null, 2)
            }
          </pre>
          <button onClick={() => props.addRandomTodo()}>
              add todo
          </button>

    </div>
  );
}

const mapStateToProps = state => ({state: state})
const mapDispatchToProps = (dispatch) => ({
  addRandomTodo: () =>
    dispatch({
      type: 'ADD_TODO',
      payload: 'borra esta tarea!',
      completed: Math.random() > 0.5 ? true : false
    }),
});
const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
  )
  (App);

export default connectedApp;
