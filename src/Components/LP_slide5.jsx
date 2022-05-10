import React, { useContext, useRef, useState } from 'react'
import './LP_slide5.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Context } from '../context/Context';
// import upload_page from './Upload_page'

const LP_slide5 = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")

  const handleSubmit_register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        number,
      })
      console.log(res);
    } catch (err) {

      console.log(err);
    }
  }

  const userRef = useRef();
  const passwordRef = useRef();

  const { user, dispatch, isFetching } = useContext(Context);
  
  const handleSubmit_login = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }

    console.log(user);

  }

  return (
    <div className="slide5" id='slide5'>
      <div className="box">
        <input type="checkbox" className='toggle-btn' name="" />
        <div className='signup'>
          <form action="" onSubmit={handleSubmit_register}>
            <div className="input-group">
              <label htmlFor="Username">Username</label>
              <input type="text" placeholder="Username" name="" className='inp' id='username-input' onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="Email">Email</label>
              <input type="Email" placeholder="Ex: abc123@gmail.com" name="" className="inp" id="email-input" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="**********" className='inp' id='password-input' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='input-group'>
              <label htmlFor="number">Number</label>
              <input type="text" name="Number" placeholder="7894561238" className='inp' id='number-input' onChange={e => setNumber(e.target.value)} />
            </div>
            <div className="input-group" >
              <input type="submit" value="Sign Up" placeholder="Ex: abc123" name="" className="inp submit-inp" id="" />
            </div>

          </form>
        </div>
        <div className='login'>
          <form action="" onSubmit={handleSubmit_login}>
            <div className='input-group space'>
              <label htmlFor="Username">Username</label>
              <input type="text" placeholder="Username" name="" className='inp' id='username-input' ref={userRef} />
            </div>
            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="**********" className='inp' id='password-input' ref={passwordRef} />
            </div>
            <div className='input-group'>
              <input type="submit" value="Log In" placeholder="Ex: abc123" name="" class="inp submit-inp" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default LP_slide5
