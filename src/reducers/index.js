import userReducers from './user';
import questionReducers from './question';

const {
  user,
  userLogout,
  allUsers,
  updateUser,
} = userReducers;
const{
  deleteQuestion,
  getQuestion,
  question,
  updateQuestion,
  answerQuestions,
  getQuizMarks,
  getAllGrades,
} = questionReducers;

export default { 
  user,
  userLogout,
  allUsers,
  updateUser,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  question,
  answerQuestions,
  getQuizMarks,
  getAllGrades
 };
