import {
  ALL_MARKS_END,
  ALL_MARKS_SUCCESS,
  ALL_MARKS_FAILURE,
  ALL_MARKS_START,
} from '../../actionTypes/questionActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ALL_MARKS_START:
      return {
        ...state,
        loading: true,
        questionErrors: null,
        message: null,
      };
    case ALL_MARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        questionErrors: null,
        message: payload.message,
        data: payload.data
      };
    case ALL_MARKS_FAILURE:
      return {
        ...state,
        loading: false,
        questionErrors: payload.error,
        message: null,
      };
    case ALL_MARKS_END:
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
