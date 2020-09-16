import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth } from "./Firebase";


function Login() {
    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/');
        }).catch(error=>alert(error.message))
        //firebase
    }
    const newacct=e=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push('/');
            }
            

        }).catch(error=>alert(error.message))
      
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="amaLogo" src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"/>
            </Link>

            <div className="LoginContainer">
                <h1>SignIn</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={email} onChange={e=>setPassword(e.target.value)}></input>
                    <button className="LoginSignInButton" onClick='signIn'>Sign In</button>
                </form>
              <p>By Signing in you agree to my terms and conditons</p>
                <button className="LoginregisterButton" onClick={newacct}>Create New Account</button>
            </div>
        </div>
    )
}

export default Login
