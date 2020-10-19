import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
import AdminNavbar from '../navbar/admin-navbar';
import ClientNavbar from '../navbar/client-navbar';
import questionActions from '../../actions/question';
import QuizMarks from './marks';
import './quiz.css';
import QuizSkeleton from './quizSkeleton';

const { getQuestions,answerQuestions } = questionActions;
class AllQuestions extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      responses:[],
      multiple:'',
      visible:false,
    };
  }
  componentDidMount() {
    const { getQuestions } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    getQuestions();
  }
  componentWillReceiveProps(nextProps) {
    const alertMessage =
      (nextProps.questionErrors && toast.error(nextProps.questionErrors));
    return !nextProps.quizLoading && alertMessage;
  }
  handleChange = (event) => {
    let answers = [];
    answers.push(event.target.value);
    this.setState({
      [event.target.name]: {id:event.target.id,answer:answers},
    });
  };
  handleMultiple = (event) => {
    let answers = [];
    answers.push(event.target.value);
    if(this.state.multiple){
      const list = [...this.state.responses];
      list.push(this.state.multiple);
      this.setState({responses:list,multiple:''})
    }
    this.setState({ multiple: {id:event.target.id,answer:answers} });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { answerQuestions } = this.props;
    let list = [...this.state.responses];
    Object.entries(this.state).forEach(state=>{
      if(state[0]!=='user'&& state[0]!=='responses'&& state[0]!=='visible'){
        list.push(state[1]);
      }
    });
    const newArr = list.reduce((obj, item) => {
      (obj[item.id]&&obj[item.id].answer) ? obj[item.id].answer.push(...item.answer) : (obj[item.id] = { ...item });
      return obj;
    }, {});
    const data={
      quizAnswer:Object.values(newArr)
    }
    answerQuestions(data);
    this.setState({visible:true});

  };
  viewMaks=() =>{
    this.setState({visible:!this.state.visible});
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{ width: '100%' }}>
      {user.type === 'admin'?(<AdminNavbar />):(<ClientNavbar/>)}
        <div className='container' style={{paddingBottom:'2%'}}>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <div className='table-responsive-md' style={{ marginTop: '3%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4
                className='navbar-brand'
                style={{
                  fontSize: '24px',
                  color: '#8f8d8d',
                  fontFamily: 'Montserrat',
                }}
              >
                Quiz Questions
              </h4>
            </nav>
            <div className='container'>
              {!loading && data ? (
              <form>
                {data.map((dt) => {
                  return (
                  (dt.type === 'multiple')?
                  (<div
                    className='card'
                    key={dt.id}
                    style={{ width: '100%', marginBottom: '1%' }}
                  >
                    <div className='card-body'>
                      <div className='card-text' style={{ marginBottom: '2%' }}>
                        {dt.question}
                      </div>
                      {dt.choices.map(ch=>{
                        const choice = JSON.parse(ch);
                        return (
                        <div className="form-check" key={choice.id}>
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name={choice.value} 
                          id={dt.id} 
                          value={choice.value}
                          onChange={this.handleMultiple}
                        />
                        <label className="form-check-label">
                          {choice.value}
                        </label>
                      </div>
                      )})}
                    </div>
                  </div>):
                  (<div
                    className='card'
                    key={dt.id}
                    style={{ width: '100%', marginBottom: '1%' }}
                    >
                    <div className='card-body'>
                      {reactStringReplace(dt.question,'_',(match,i)=>(
                        <input 
                          className='inputSearch' 
                          key={i} 
                          id={dt.id}
                          placeholder='.............................' 
                          name={i+dt.type+dt.id} 
                          onChange={this.handleChange}></input>
                      ))}&nbsp;{dt.choices.length>0?`(${dt.choices.map(ch=>(`${JSON.parse(ch).value} `))})`:null}
                      
                    </div>
                  </div>)
                )})}
                <div style={{textAlign:'center',padding:'10px'}}>
                  <button 
                    className="btn btn-secondary"
                    onClick={this.handleSubmit}
                    style={{backgroundColor:' #101418', width:'15%'}}
                    type="button">Submit</button>
                </div>
              </form>
              ) : <QuizSkeleton/>}
            </div>
          </div>
          <QuizMarks
          visible={this.state.visible}
          marks={this.props.quizMarks}
          clicked={this.viewMaks}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({getQuestion:{data,loading},answerQuestions:{marks,questionErrors,message}}) => {
  return {
    data,
    loading,
    quizMarks:marks,
    questionErrors:questionErrors,
    message:message,
    // quizLoading:answerQuestions.loading
  };
};
export default connect(mapStateToProps, {
  getQuestions,
  answerQuestions,
})(AllQuestions);
