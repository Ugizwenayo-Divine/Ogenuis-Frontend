import addQuestion from './addQuestionAction';
import updateQuestion from './updateQuestionAction';
import deleteQuestion from './deleteQuestionAction';
import getQuestions from './getQuestionAction';
import answerQuestions from './correctQuestions';
import getQuizGrades from './getQuizMarks';
import getAllGrades from './getAllGrades';
import getQuestionByType from './getQuestionByType';

export default {
  addQuestion, 
  updateQuestion, 
  deleteQuestion, 
  getQuestions,
  getQuizGrades, 
  answerQuestions,
  getAllGrades,
  getQuestionByType,
}