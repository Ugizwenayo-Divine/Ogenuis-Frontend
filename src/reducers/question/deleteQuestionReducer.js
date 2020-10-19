import {
  QUESTION_DELETE_END,
  QUESTION_DELETE_SUCCESS,
  QUESTION_DELETE_FAILURE,
  QUESTION_DELETE_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_DELETE_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUESTION_DELETE_SUCCESS:
      window.location.replace('/displayquestion');
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
      };
    case QUESTION_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUESTION_DELETE_END:
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
