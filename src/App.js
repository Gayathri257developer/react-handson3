import React, { Component } from 'react'
import FeedbackData from './Components/FeedbackData';

 class App extends Component {
  render() {

    return (
      <div>
      
      <FeedbackData/>
      </div>
    )
  }
}
// <BrowserRouter>
//       <Routes>
//         <Route path='/feedbackdata' element={<FeedbackData/>}/>
//         <Route path="/" element={<FeedbackForm/>} />
//       </Routes>
//       </BrowserRouter>
export default App