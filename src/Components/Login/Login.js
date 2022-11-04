import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import Swal from 'sweetalert2'
import Logo from '../../olx-logo.png';
import './Login.css';
import {Link, useHistory} from 'react-router-dom'
function Login() {
  const history= useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase}= useContext(FirebaseContext)
  function handleLogin(e) {
    e.preventDefault(
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        history.push('/')
      }).catch((error)=>{
        Swal.fire({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      })
    )
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}>Signup</Link>
        <a></a>
      </div>
    </div>
  );
}

export default Login;
