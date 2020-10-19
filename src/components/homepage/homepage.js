import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import MainNavBar from '../navbar/main-navbar';
import './homePage.css';

class Landing extends Component {
  render (){
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    // if (token) {
    //   if(user.type !== 'client'){
    //     return <Redirect to='/addquestion'/>        
    //   }
    // }
    return(
      <div className='landing'>
        <div className="landing-body">
          <div className='getStarted'>
            <button
              type="button" 
              className="btn btn-secondary btn-lg"
              style={{
              width:'15%',
              // opacity:'0.7',
              backgroundColor:'#101418',
            }}><Link to='/login'>Get Started</Link></button>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing;