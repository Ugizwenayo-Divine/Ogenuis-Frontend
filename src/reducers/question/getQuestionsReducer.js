import {
  QUESTION_DISPLAY_END,
  QUESTION_DISPLAY_SUCCESS,
  QUESTION_DISPLAY_FAILURE,
  QUESTION_DISPLAY_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_DISPLAY_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUESTION_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
        data: payload.data,
      };
    case QUESTION_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUESTION_DISPLAY_END:
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
