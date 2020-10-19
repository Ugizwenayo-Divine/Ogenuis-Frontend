import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () =>{
  const user = JSON.parse(localStorage.getItem('user'));

    return (

      <div className='container'>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
          <div className='form-row'>
            <div className="card-body col-md-8" style={{marginLeft:'5%'}}>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              </div>
              {user?(user.type === 'admin' ?(<div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              </div>):null):null}
            </div>
          </div>
        </div>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
          <div className='form-row'>
            <div className="card-body col-md-8" style={{marginLeft:'5%'}}>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={80}/><br/>
              <Skeleton  height={15} width={80}/>
              </div>
              {user?(user.type === 'admin' ?(<div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              </div>):null):null}
            </div>
          </div>
        </div>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
          <div className='form-row'>
            <div className="card-body col-md-8" style={{marginLeft:'5%'}}>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              </div>
              {user?(user.type === 'admin' ?(<div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              </div>):null):null}
            </div>
          </div>
        </div>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
          <div className='form-row'>
            <div className="card-body col-md-8" style={{marginLeft:'5%'}}>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={900}/><br/>
              <Skeleton  height={15} width={80}/><br/>
              <Skeleton  height={15} width={80}/>
              </div>
              {user?(user.type === 'admin' ?(<div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              </div>):null):null}
            </div>
          </div>
        </div>
      </div>
    )
}
export default skeleton;