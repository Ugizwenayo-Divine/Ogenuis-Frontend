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
        URL: `${QUIZ_GRADES_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: questionActionTypes.ALL_MARKS_START,
      onEnd: questionActionTypes.ALL_MARKS_END,
      onSuccess: questionActionTypes.ALL_MARKS_SUCCESS,
      onFailure: questionActionTypes.ALL_MARKS_FAILURE,
    })
  );
