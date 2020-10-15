import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { QUESTION_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (type) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${QUESTION_URL}/type?type=${type}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: questionActionTypes.QUESTION_DISPLAY_START,
      onEnd: questionActionTypes.QUESTION_DISPLAY_END,
      onSuccess: questionActionTypes.QUESTION_DISPLAY_SUCCESS,
      onFailure: questionActionTypes.QUESTION_DISPLAY_FAILURE,
    })
  );
