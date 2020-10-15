import { questionActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { QUESTION_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${QUESTION_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: questionActionTypes.QUESTION_UPDATE_START,
      onEnd: questionActionTypes.QUESTION_UPDATE_END,
      onSuccess: questionActionTypes.QUESTION_UPDATE_SUCCESS,
      onFailure: questionActionTypes.QUESTION_UPDATE_FAILURE,
    })
  );
