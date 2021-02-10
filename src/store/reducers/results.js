import * as actionTypes from '../actions';

const initialState = {
    results : []
}

const redcuer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
               ...state,
               results: state.results.concat({val: action.result, id:new Date()}) // conact returns new array so immutable, push wud have mutted old array itself
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