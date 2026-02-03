import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

const navigate = useNavigate();

  return (
    <div className='loginPage-ctn'>
        <h4>Signin to your PopX account</h4>
        <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</text>

        <div className='form-ctn'>
            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Email Address</label>
                </div>
                <input type="email" placeholder="Enter email address" />
            </div>

            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Password</label>
                </div>
                <input type="password" placeholder="Enter password" />
            </div>

        </div>

        <button className='btn-login' onClick={()=>navigate('/createAccount')}>Login</button>

        
    </div>
  )
}

export default LoginPage