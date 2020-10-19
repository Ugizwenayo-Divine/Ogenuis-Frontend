import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () =>{
    return (

      <div className='table-responsive-md container'>
        <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
        <thead className='thead-dark'>
          <tr style={{color:'#f0f0f0e7'}}>
            <th>Quiz Id</th>
            <th>Done At</th>
            <th>Marks</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>
          <td><Skeleton  height={25} width={100}/></td>              
        </tr>
        </tbody>
        </table>
    </div>
    )
}
export default skeleton;