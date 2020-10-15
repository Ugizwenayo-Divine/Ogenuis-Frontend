import {
  QUESTION_CORRECTION_END,
  QUESTION_CORRECTION_SUCCESS,
  QUESTION_CORRECTION_FAILURE,
  QUESTION_CORRECTION_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_CORRECTION_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUESTION_CORRECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
        marks:payload.data
      };
    case QUESTION_CORRECTION_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUESTION_CORRECTION_END:
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
