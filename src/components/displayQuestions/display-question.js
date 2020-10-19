import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../navbar/admin-navbar';
import questionActions from '../../actions/question';
import QuestionSkeleton from './questionsSkeleton';

const { getQuestions,deleteQuestion,getQuestionByType } = questionActions;
class AllQuestions extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search: null,
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

    return !nextProps.loading && alertMessage;
  }
  handleDelete(id) {
    const { deleteQuestion } = this.props;
    deleteQuestion(id);
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { getQuestionByType } = this.props;
    getQuestionByType(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { getQuestions } = this.props;
    getQuestions();
  };
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    return (
      <div style={{ width: '100%' }}>
      <AdminNavbar />
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
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
                All Questions <i className='fas fa-ad'></i>
              </h4>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='input-group mr-sm-2'>
                  <select
                    className='custom-select'
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Search type ...</option>
                    <option value='multiple'>Multiple</option>
                    <option value='filling'>Filling</option>
                    <option value='matching'>Matching</option>
                  </select>
                  <div className='input-group-append'>
                    <button 
                      className='btn btn-secondary'
                      style={{backgroundColor:' #101418'}}
                      type='submit'>
                      Search
                    </button>
                  </div>
                </div>
                <button
                  className='btn btn-secondary my-2 my-sm-0'
                  style={{backgroundColor:' #101418'}}
                  onClick={this.handleAll}
                  type='button'
                >
                  ALL
                </button>
              </form>
            </nav>
            <div className='container'>
              {!loading && data ? (
                data.map((dt) => (
                  <div
                    className='card'
                    key={dt.id}
                    style={{ width: '100%', marginBottom: '1%' }}
                  >
                    <div className='card-body'>
                      <div className='card-text' style={{ marginBottom: '2%' }}>
                        {dt.question}
                      </div>
                      {dt.choices.length>0?dt.choices.map(ch=>{
                        console.log(JSON.parse(ch).value,'arr');
                        const choice = JSON.parse(ch);
                        return (
                        <div className="form-check" key={choice.id}>
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name={choice.value} 
                          id="female" 
                          value={choice.value}
                          disabled
                        />
                        <label className="form-check-label">
                          {choice.value}
                        </label>
                      </div>
                      )}):null}
                      <br/>
                      <button
                        className='btn btn-outline-danger my-2 my-sm-0'
                        onClick={() => {this.handleDelete(dt.id);}}
                        type='button'
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))
              ) : <QuestionSkeleton/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({getQuestion:{data,loading},deleteQuestion:{questionErrors,message}}) => {
  // console.log(getQuestions,'llal');
  return {
    data,
    loading,
    questionErrors,
    message
  };
};
export default connect(mapStateToProps, {
  getQuestions,
  deleteQuestion,
  getQuestionByType,
})(AllQuestions);
