import React, { useState } from 'react'
import '../styles/register.css'

function Registerform() {
    const [gender, setGender] = useState();

    return (
        <div className='register'>
            <div className='create-form'>
                <div className='create-title'>
                    <h1>Create an account</h1>
                </div>
                <div className='create-register'>
                    <div className='create-email'>
                        <p>EMAIL</p>
                        <input className="textboxregister" type="text" placeholder=" " />
                    </div>
                    <div className='create-username'>
                        <p>USERNAME</p>
                        <input className="textboxregister" type="text" placeholder=" " />
                    </div>
                    <div className='create-password'>
                        <p>PASSWORD</p>
                        <input className="textboxregister" type="text" placeholder=" " />
                    </div>
                    <div className='maleorfemale'>
                        <input className='radio' type="radio" name="gender" value="Male" /><p>Male</p>
                        <input className='radio' type="radio" name="gender" value="Female" /><p>Female</p>
                    </div>
                    <div className='create-date'>
                        <input className="date" type="date" placeholder=" " />
                    </div>
                    <div className='btn-continue'>
                    <input className="btn-submitregister" type="submit" value="CONTINUE" />
                    <li><a href="login">Arleady have account?</a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerform