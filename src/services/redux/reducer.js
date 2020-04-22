const initialState = {
    visibility: 'ALL',
    todos:[]
}


function reducer(state = initialState, action) {
    console.log(action);

    switch (action.type) {
        case 'ADD_TODO':
            return {
                 ...state,
                 todos: [
                     ...state.todos,
                     {
                         text:action.payload,
                         completed: action.completed || false,
                         id: action.id
                     }
                 ]
            };
        case 'CHANGE_VISIBILITY':
            return {
                ...state,
                visibility: action.payload
            }

        default:
             return state;
    }


}


export default reducer;