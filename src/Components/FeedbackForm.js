import React, { Component } from 'react'
import './Form.css';
import {Link} from "react-router-dom";
// import FeedbackData from './FeedbackData';

class FeedbackForm extends Component {
  constructor(){
    super();
        this.state = {
          name: '',
          depart: '',
          rating: '' 
        }
    }
updateData = (e) =>{
  this.Setstate({name:e.target.value})
  this.Setstate({depart:e.target.value})
  this.Setstate({rating:e.target.value})
}


  render() {
    return (
      <div>
      <h2>Employee Feedback Form</h2>
      <br/>
     <form>
     <label> Name: <input type="text" value={this.state.value} onChange={this.updateData}/>
     </label><br/>
     <label> Department: <input type="text" value={this.state.value} onChange={this.updateData}/>
     </label><br/>
     <label> Rating: <input type="number" value={this.state.value} onChange={this.updateData}/>
     </label><br/>
     <Link to="/feedbackdata">
     <input type="submit"/>
     </Link>
     
     </form>
      </div>
    )
  }
}
export default FeedbackForm;