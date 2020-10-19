import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import './marks.css';

class QuizMarks extends Component{
  constructor(){
    super();
    this.state={
    }
  }
  handlePlay=()=>{
    this.props.history.push('/quiz');
    window.location.reload();
  } 
  render(){
    const {visible,marks} = this.props;
    const visibility = visible?'visible':'hidden';
    return(
        <div id="myModal" className="order-modal" style={{visibility:visibility}} onClick={this.props.clicked}>
          <div className='container'>
          <div className="order-modal-content" style={{textAlign:'center'}}>
            <span className="close" onClick={this.props.clicked}>&times;</span>
            <h4 style={
              {
                textAlign: 'center',
                color: 'rgb(105, 102, 102)'
              }
            }>Your Grades</h4>
            <hr/>
            <p style={{fontSize:'25px'}}><strong>You have got {marks?marks.marks:null} in the Quiz performed</strong></p>
            {/* <hr/> */}
            <div className='button-div'>
              <button 
              className='btn btn-secondary'
              onClick={(event)=>{this.handlePlay()}}>
                PLAY AGAIN
              </button>
            </div>
          </div>
          </div>
        </div>
    )
  }
}
export default connect()(withRouter(QuizMarks));