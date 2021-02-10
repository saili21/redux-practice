import * as actionTypes from '../actions';

const initialState = {
    counter : 0
}

const redcuer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: // old javascript way
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT: // new ES6 way
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }  
        default:
            return state
    }  
}

export default redcuer;