// action types
import {
  FETCH_MENTEE_SUCCESS,
  FETCH_MENTEE_FAILURE,
  FETCH_MENTEE_START,
  EDIT_MENTEE_START,
  EDIT_MENTEE_SUCCESS,
  EDIT_MENTEE_FAILURE,
} from '../actions/actionTypes';

//initializes mentee reducer state
const initialState = {
  mentees: [],
};

const menteeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENTEE_START:
      return { ...state };
    case FETCH_MENTEE_SUCCESS:
      return {
        ...state,
        mentees: action.payload,
      };
    case FETCH_MENTEE_FAILURE:
      return { ...state };
    case EDIT_MENTEE_START:
      return { ...state };
    case EDIT_MENTEE_SUCCESS:
      return { ...state };
    case EDIT_MENTEE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default menteeReducer;
