import React, { Component } from 'react'
import './Data.css';
import {Link} from 'react-router-dom';

 class FeedbackData extends Component {
  render() {
    return (
      <>
         <h2>Employee feedback data</h2>
         <br/>
         <div className='outerbox'>
           <div className='databox'>
              
           </div>
         </div>
         <Link to="/">
         <button>Go Back</button>
         </Link>
         
      </>
    )
  }
}
export default FeedbackData