import React from 'react'

import FeedbackData from "./Components/FeedbackData";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      depart: '',
      rating:'',
      users:[]
    }
  }

  updateName = (event) => {
    this.setState({name: event.target.value});
  }

  updateDepartment = (event) => {
    this.setState({depart: event.target.value});
  }

  updateRating = (event) => {  
    this.setState({rating: event.target.value});
  }


  handleOnClick  = () => {
    const updatedUsers = this.state.users;

   updatedUsers.push({name:this.state.name, depart:this.state.depart, rating:this.state.rating})
    this.setState({users:updatedUsers, name:'', depart:'', rating:'' })
  
  }

    render() {
    return (
      <>
      <div className="form">
      <h1> Emoplyee Feedback Form</h1>
      Name:<input value={this.name} type="text" onChange={this.updateName} />
      <br />
      Department:<input value={this.depart} type="text" onChange={this.updateDepartment}/>
      <br/>
      Rating:<input value={this.rating} type="number" onChange={this.updateRating}/>  
      <button id='btn1' onClick={this.handleOnClick}> Submit </button>
      </div>  
      

    <FeedbackData name={this.state.name} depart={this.state.depart} rating={this.state.rating} users={this.state.users} 
    updateName={this.updateName} updateDepartment={this.updateDepartment} updateRating={this.updateRating}/> 
      </>
    
    )
  }
}

export default App;

