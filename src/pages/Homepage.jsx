import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className='homePage-ctn'>
        <h4>Welcome to PopX</h4>
        <text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</text>
    
    
        <div className='btn-ctn'>
            <button className='btn-create' onClick={()=> navigate('/signUp')}>
                Create Account
            </button>


            <button className='btn-register' onClick={()=> navigate('/signUp')}>
                Already Registered? Log In
            </button>

        </div>


    </div>
  )
}

export default Homepage