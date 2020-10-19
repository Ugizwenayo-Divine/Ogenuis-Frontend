import initialState from '../../store/initialState';
import addQuestionReducer from './addQuestionReducer';
import deleteQuestionReducer from './deleteQuestionReducer';
import updateQuestionReducer from './updateQuestionReducer';
import getQuestionReducer from './getQuestionsReducer';
import answerQuestionReducer from './answerQuestionReducer';
import getQuizMarksReducer from './getQuizGradesReducer';
import getAllGradesReducer from './getAllGradesReducer';

const question= (state=initialState,action) =>{
  const questions = addQuestionReducer(state,action);
  return questions || state;
}
const deleteQuestion= (state=initialState,action) =>{
  const questions = deleteQuestionReducer(state,action);
  return questions || state;
}
const updateQuestion= (state=initialState,action) =>{
  const questions = updateQuestionReducer(state,action);
  return questions || state;
}
const getQuestion= (state=initialState,action) =>{
  const questions = getQuestionReducer(state,action);
  return questions || state;
}
const answerQuestions= (state=initialState,action) =>{
  const questions = answerQuestionReducer(state,action);
  return questions || state;
}
const getQuizMarks = (state=initialState,action) =>{
  const questions = getQuizMarksReducer(state,action);
  return questions || state;
}
const getAllGrades = (state=initialState,action) =>{
  const questions = getAllGradesReducer(state,action);
  return questions || state;
}
export default{question,deleteQuestion, updateQuestion, getQuestion, answerQuestions, getQuizMarks, getAllGrades}