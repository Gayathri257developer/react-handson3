import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FeedbackData from './Components/FeedbackData';
import FeedbackForm from './Components/FeedbackForm'

 class App extends Component {
  render() {

    return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route path='/feedbackdata' element={<FeedbackData/>}/>
        <Route path="/" element={<FeedbackForm/>} />
      </Routes>
      </BrowserRouter>
      
      </div>
    )
  }
}
export default App