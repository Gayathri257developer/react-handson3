import React, { useState } from "react";
import './Data.css'

const FeedbackData = () => {

  const [input, setData] = useState({name:"",department:"",rating:"",})
  const[arrofobj,setArrofobj] =useState([])
  const[hidden,setHidden] =useState(0)

  const [counter,setCounter] = useState(0);
  const inputChange = (e) => {
        setData({...input,[e.target.name]:e.target.value});
  }

  const onsubmits = (e) =>{
    e.preventDefault();
    setCounter(counter+1)
    const arr={...input,id:counter}
    setArrofobj([...arrofobj,arr])
    setData({name:"",department:"",rating:"",})
    
    setHidden(!hidden)
  }

  const goBack =()=>{
    setHidden(!hidden)
  }
  

  return (
    <>
      <div style={{'display':hidden===true ? 'none':'unset'}} >
          <h2>employee feedback form</h2>
          <form onSubmit={onsubmits}>
            <label >Name :
            <input type="text" name="name" id="name" value={input.name}  onChange={inputChange} />
            </label><br/>
            <label >Department :
            <input type="text" name="department" id="department" value={input.department} onChange={inputChange} />
            </label><br/>
            <label >Rating :
            <input type="number" name="rating" id="rating" value={input.rating} onChange={inputChange} />
            </label><br/>
            <input type="submit"/>
          </form>
          
      </div>
      <div style={{'display':hidden===true ? 'unset':'none'}} >
        <h2>employee feedback data</h2>
          <div className='outerbox'>
            {arrofobj.map((item)=>{
                return <div className='databox'>Name : {item.name } | Department : {item.department} | Rating : {item.rating}</div>
            })}
          </div>
          <button onClick={goBack}>Go Back</button>
      </div>
     
    </>
  );
}
export default FeedbackData;