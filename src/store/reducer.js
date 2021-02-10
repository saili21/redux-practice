import * as actionTypes from '../store/actions';

const initialState = {
    counter : 0 ,
    results : []
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
                counter: state.counter + 5 
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - 5
            } 
        case actionTypes.STORE_RESULT:
            return {
               ...state,
               results: state.results.concat({val: state.counter, id:new Date()}) // conact returns new array so immutable, push wud have mutted old array itself
            }
        case actionTypes.DELETE_RESULT:
            // const newArray = [...state.results]
            // newArray.splice(id,1);

            const newArray = state.results.filter(result => result.id !== action.resultElId); // filter return a new copy of array (immutable)
            return {
                ...state,
                results: newArray
            }     
        default:
            return state
    }  
}

export default redcuer;