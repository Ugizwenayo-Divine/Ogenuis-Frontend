import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { QUESTION_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: `${QUESTION_URL}/quiz`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: questionActionTypes.QUESTION_CORRECTION_START,
      onEnd: questionActionTypes.QUESTION_CORRECTION_END,
      onSuccess: questionActionTypes.QUESTION_CORRECTION_SUCCESS,
      onFailure: questionActionTypes.QUESTION_CORRECTION_FAILURE,
    })
  );
