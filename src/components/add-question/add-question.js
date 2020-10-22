import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../navbar/admin-navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import questionActions from '../../actions/question';
import './add-question.css'; 

const {
  addQuestion,
} = questionActions;
class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      question:"",
      choices:[],
      answers:[],
      choice:'',
      answer:'',
      type:''

    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addItem=(item)=>{

      const userInput = {
        id :  Math.random(),
        value : item === 'choice' ? this.state.choice : this.state.answer
      }; 
      const list = item === 'choice' ? [...this.state.choices]:[...this.state.answers]; 
      list.push(userInput);
      if(item === 'choice'){
        this.setState({ 
          choices:list, 
          choice:""
        });
      }
      else{
        this.setState({ 
          answers:list, 
          answer:""
        });        
      }
  }
  deleteItem=(item,key)=>{ 
    const newArr = item==='choice'?[...this.state.choices]:[...this.state.answers];
    newArr.splice(key, 1);
    if(item==='choice'){
      this.setState({ 
        choices:newArr, 
      });
    }
    else{
      this.setState({ 
        answers:newArr, 
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data={
      question:this.state.question,
      choices:this.state.choices,
      answer:this.state.answers,
      type:this.state.type
    }
    console.log('data',data);
    this.props.addQuestion(data);
  };
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.questionErrors && toast.error(nextProps.questionErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const {type} = this.state;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(type,'type');
    const visible = (type === 'multiple' || type === 'matching')?'block':'none';
    console.log(visible,'vis')

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/displayclient'/>
    }
    return (
      <div>
      <AdminNavbar/>
      <div id='layout white' style={{marginTop:'-4%'}}>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '500px' }}
          />
          <div className='formProduct'>
            <div className='headerProduct'>
              <h3 className='text-center font-weight-light my-4'>
                Add Question
              </h3>
            </div>
            <div className='bodyProduct'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                <div className='col-md-12'>
                    <label className='mb-1'>Question</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='question'
                      className='form-control py-4'
                      placeholder='Enter the question'
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <div className='col-md-12'>
                    <label className="mb-1">Question Type</label>
                      <select className="custom-select" name='type' onChange={this.handleChange}>
                        <option defaultValue>Choose type</option>
                        <option value="multiple">Multiple</option>
                        <option value="filling">Filling</option>
                        <option value="matching">Matching</option>
                      </select>
                  </div>
                  <div className='col-md-12' style={{display:visible}}>
                    <label className='mb-1'>Possible Answers</label>
                    <div className="input-group">
                      <input
                        className='form-control py-2' 
                        name='choice'
                        placeholder="Add possible answers" 
                        value = {this.state.choice}
                        onChange = {this.handleChange}/>
                      <div className="input-group-append">
                        <button 
                          className="btn btn-secondary"
                          style={{backgroundColor:' #101418'}}
                          onClick = {()=>this.addItem('choice')} 
                          type="button">ADD</button>
                      </div>
                    </div>
                    <ListGroup>
                    {this.state.choices.map(item => {return( 
              
                        <ListGroup.Item variant="dark" action 
                          key={item.id} 
                          onClick = { () => this.deleteItem('choice',item.id) }> 
                          {item.value} 
                          </ListGroup.Item> 
              
                    )})} 
                    </ListGroup>
                  </div>
                  <div className='col-md-12'>
                    <label className='mb-1'>Correct Answers</label>
                    <div className="input-group">
                      <input
                        name='answer'
                        className='form-control py-2' 
                        placeholder="Add correct answers" 
                        value = {this.state.answer}
                        onChange = {this.handleChange}/>
                      <div className="input-group-append">
                        <button 
                          className="btn btn-secondary"
                          style={{backgroundColor:' #101418'}}
                          onClick = {()=>this.addItem('answer')} 
                          type="button">ADD</button>
                      </div>
                    </div>
                    <ListGroup>
                    {this.state.answers.map(item => {return( 
              
                        <ListGroup.Item variant="dark" action  
                          key={item.id}  
                          onClick = { () => this.deleteItem('answer',item.id) }> 
                          {item.value} 
                          </ListGroup.Item> 
              
                    )})} 
                    </ListGroup>
                  </div>
              </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block' style={{backgroundColor:' #101418'}}>
                    Add Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = ({question:{questionErrors,message,loading}})=>{
  return ({
  message,
  questionErrors,
  loading,
})}
export default connect(mapStateToProps,{addQuestion})(AddQuestion);
