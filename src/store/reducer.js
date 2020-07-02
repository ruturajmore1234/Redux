import * as actionTypes from './actions';

const initialState = {
  counter: 13,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
          results: state.results.concat({id: new Date(),value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((result) => result.id !== action.resultEleId);
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state;
  }
};

export default reducer;