import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { QUESTION_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${QUESTION_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: questionActionTypes.QUESTION_DELETE_START,
      onEnd: questionActionTypes.QUESTION_DELETE_END,
      onSuccess: questionActionTypes.QUESTION_DELETE_SUCCESS,
      onFailure: questionActionTypes.QUESTION_DELETE_FAILURE,
    })
  );
