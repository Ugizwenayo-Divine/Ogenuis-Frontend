import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { QUIZ_GRADES_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${QUIZ_GRADES_URL}/user`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: questionActionTypes.QUIZ_MARKS_START,
      onEnd: questionActionTypes.QUIZ_MARKS_END,
      onSuccess: questionActionTypes.QUIZ_MARKS_SUCCESS,
      onFailure: questionActionTypes.QUIZ_MARKS_FAILURE,
    })
  );
