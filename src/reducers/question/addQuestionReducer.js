import {
  QUESTION_ADD_END,
  QUESTION_ADD_SUCCESS,
  QUESTION_ADD_FAILURE,
  QUESTION_ADD_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_ADD_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUESTION_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
       questionErrors: null,
        message: payload.message,
      };
    case QUESTION_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUESTION_ADD_END:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
