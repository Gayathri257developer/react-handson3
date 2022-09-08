import React from "react"
import './Data.css'

const FeedbackData = (props) => {
  return (
<>
<div>
<h1> Employee Feedback Data</h1>
<div className="outerbox">   
  {
    props.users.map(item => { 
      return  <div className="databox">Name: {`${item.name} || Department: ${item.depart} || Rating: ${item.rating}`}
      </div> 
    })
}     
  </div> 

 <button id="btn2">Go Back</button>
</div> 
</>   
    )
  }

export default FeedbackData;
