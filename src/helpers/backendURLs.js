const BASE_URL = 'https://ogenius-quiz-app.herokuapp.com/api';
const LOCAL_URL = 'http://localhost:3000/api';
const SIGNUP_URL = `${BASE_URL}/auth/signup`;
const LOGIN_URL = `${BASE_URL}/auth/login`;
const USER_LOGOUT_URL = `${BASE_URL}/auth/logout`;
const UPDATE_USER_URL = `${BASE_URL}/auth/update-user`;
const GET_USER_URL = `${BASE_URL}/auth`;
const ADD_QUESTION_URL = `${BASE_URL}/question/add`;
const QUESTION_URL = `${BASE_URL}/question`;
const QUIZ_GRADES_URL = `${BASE_URL}/grade`;
;
export { 
    BASE_URL,
    LOCAL_URL,
    SIGNUP_URL,
    LOGIN_URL,
    USER_LOGOUT_URL,
    UPDATE_USER_URL,
    GET_USER_URL,
    ADD_QUESTION_URL,
    QUESTION_URL,
    QUIZ_GRADES_URL,
};
