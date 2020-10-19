import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../navbar/admin-navbar';
import ClientNavbar from '../navbar/client-navbar';
import questionActions from '../../actions/question';
import UserGradeSkeleton from './userGradesSkeleton';

const{
  getQuizGrades
} = questionActions;

class AllGrades extends Component{
  constructor(){
    super();
    this.state={
      user:{},
    }
  }
  componentDidMount(){
      const { getQuizGrades } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
      getQuizGrades();
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.questionErrors && toast.error(nextProps.questionErrors));

  return !nextProps.loading && alertMessage;    
  }
  render (){
    const {loading, data }=this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{width:'100%'}}>
      {user.type === 'admin'?(<AdminNavbar />):(<ClientNavbar/>)}
        <div className='container'>
        <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
        <div className='table-responsive-md'  style={{marginTop:'5.8%'}}>
        <nav className="navbar navbar-light" style={{width:'100%', marginLeft:'0%'}}>
          <h4 className="navbar-brand" style={{fontSize:'24px',color:'#8f8d8d',fontFamily:'Montserrat'}}>All Marks</h4>
        </nav>
          {((!loading && data) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
            <th>Quiz Id</th>
            <th>Done At</th>
            <th>Marks</th>
            </tr>
          </thead>
          {data.map(dt=>{
            const date= new Date(dt.createdAt);
            return(<tbody  key={dt.id}>
              <tr>
              <td>{dt.id}</td>
              <td>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},  ${date.getHours()}:${date.getMinutes()}`}</td>
              <td>{dt.marks}</td>           
              </tr>
            </tbody>)})}
          </table>:<UserGradeSkeleton/>)}
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({getQuizMarks:{loading, data, message, questionErrors}}) => {
  console.log(data);
    return {
        loading,
        message,
        data,
        questionErrors,
    }
  }
export default connect(mapStateToProps,{getQuizGrades})(AllGrades);