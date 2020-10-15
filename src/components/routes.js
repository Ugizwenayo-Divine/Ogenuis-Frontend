import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import AllUsers from './display-user/display-user';
import UpdateUser from './update-user/update-user';
import AddQuestion from './add-question/add-question';
import AllQuestions from './displayQuestions/display-question';
import Quiz from './quiz/quiz';
import AllUserGrades from './displayGrades/displayGrades';
import HomePage from './homepage/homepage';
import AllGrades from './displayAllGrades/displayGrades';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/' component={HomePage} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />

    {/* Adding Product */}
    <Route exact path='/displayuser' component={AllUsers} />
    <Route exact path='/updateuser' component={UpdateUser} />
    <Route exact path='/addquestion' component={AddQuestion} />
    <Route exact path='/displayquestion' component={AllQuestions} />
    <Route exact path='/quiz' component={Quiz} />
    <Route exact path='/quizgrades' component={AllUserGrades} />
    <Route exact path='/displaygrade' component={AllGrades} />

  </Switch>
);

export default Routes;
