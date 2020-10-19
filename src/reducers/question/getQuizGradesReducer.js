import {
  QUIZ_MARKS_END,
  QUIZ_MARKS_SUCCESS,
  QUIZ_MARKS_FAILURE,
  QUIZ_MARKS_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUIZ_MARKS_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUIZ_MARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
        data: payload.data
      };
    case QUIZ_MARKS_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUIZ_MARKS_END:
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
