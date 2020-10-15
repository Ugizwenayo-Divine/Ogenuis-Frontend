import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_QUESTION_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_QUESTION_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: questionActionTypes.QUESTION_ADD_START,
      onEnd: questionActionTypes.QUESTION_ADD_END,
      onSuccess: questionActionTypes.QUESTION_ADD_SUCCESS,
      onFailure: questionActionTypes.QUESTION_ADD_FAILURE,
    })
  );
