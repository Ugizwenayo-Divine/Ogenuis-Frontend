import {
  QUESTION_UPDATE_END,
  QUESTION_UPDATE_SUCCESS,
  QUESTION_UPDATE_FAILURE,
  QUESTION_UPDATE_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_UPDATE_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case QUESTION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
      };
    case QUESTION_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case QUESTION_UPDATE_END:
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
