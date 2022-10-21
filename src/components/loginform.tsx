import React from 'react'
import '../styles/login.css'
import logingoogle from '../img/google 1.svg'
import loginfacebook from '../img/facebook 1.svg'
import logingmail from '../img/gmail (1) 1.svg'
import loginapple from '../img/apple-logo 1.svg'
import Pageheader from './page-header'

function Loginform() {
  return (
    <div className="login-all">
      <div className="containerlogin">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-deatail">
          <p>Welcome to login we're hope you enjoy!</p>
        </div>
        <div className="login">
          <div className="login-username">
            <h2>USERNAME OR EMAIL</h2>
            <input className="textbox" type="text" placeholder=" " />
          </div>
          <div className="login-password">
            <h2>PASSWORD</h2>
            <input className="textbox" type="text" placeholder=" " />
            <li><a href="#">Forgot your password?</a></li>
          </div>
          <div className="btn-login">
            <input className="btn-submit" type="submit" value="Log in" />
            <li><a href="register">Register?</a></li>
          </div>
          <div className="or-title">
            <h3>OR</h3>
          </div>
        </div>
        <div className="login-with">
          <div className="login-google">
            <a href="#" className="joinchat"><img src={logingoogle} alt="" />Login with google</a>
          </div>
          <div className="login-gmail">
            <a href="#" className="joinchat"><img src={logingmail} alt="" />Login with gmail</a>
          </div>
          <div className="login-facebook">
            <a href="#" className="joinchat"><img src={loginfacebook} alt="" />Login with facebook</a>
          </div>
          <div className="login-apple">
            <a href="#" className="joinchat"><img src={loginapple} alt="" />Login with apple</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform