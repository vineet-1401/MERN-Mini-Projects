import React, { useState } from "react";

function Form(props) {

  const [username, setName] = useState({
    fname:"",
    lname:""
  })
  function handleChange(event){
    const {value, name} = event.target;
    setName((prevValue)=>{
      if (name === "fname"){
        return {
          fname:value,
          lname:prevValue.lname
        }
      }else if (name === "lname"){
        return {
          fname: prevValue.fname,
          lname:value
        }
      }
    })
  }




  const [isMouseOver, setMouseOver] = useState(true);


  function updateMouseOver() {
    setMouseOver(false);
  }
  function updateMouseOut() {
    setMouseOver(true)
  }



  return (
    <>
      <h1>Hello {username.fname} {username.lname}</h1>
      <form className="form" >
        <input onChange={handleChange} type="text" value={username.fname} name="fname" placeholder="First Name" />
        <input onChange={handleChange} type="text" value={username.lname} name="lname" placeholder="Last Name" />
        <input type="password" placeholder="Password" />
        {props.register && <input type="password" placeholder="Confirm Password" />}
        {props.register ? <button type="button" style={{ backgroundColor:  isMouseOver? "white" : "black"}} onMouseOver={updateMouseOver} onMouseOut={updateMouseOut} >Register</button> : <button type="button" style={{ backgroundColor:  isMouseOver? "white" : "black"}} onMouseOver={updateMouseOver} onMouseOut={updateMouseOut}>Login</button >}
      </form >
    </>
  );
}

export default Form;
