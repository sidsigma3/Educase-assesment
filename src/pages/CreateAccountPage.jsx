import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';




const CreateAccountPage = () => {
    const navigate = useNavigate();

  return (
    <div className='createAccountPage-ctn'>
        <div>
        <h4>Create your PopX account</h4>
        <div className='form-ctn'>
            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Full Name <span className='red-dot'>*</span></label>
                </div>
                <input type="text" placeholder="Enter full name" defaultValue={'Marry Doe'}/>
            </div>


            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Phone number <span className='red-dot'>*</span></label>
                </div>
                <input type="tel" placeholder="Enter phone number" defaultValue={'Marry Doe'}/>
            </div>

            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Email Address <span className='red-dot'>*</span></label>
                </div>
                <input type="email" placeholder="Enter email address" defaultValue={'Marry Doe'}/>
            </div>

            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Password <span className='red-dot'>*</span></label>
                </div>
                <input type="password" placeholder="Create password" defaultValue={'Marry Doe'}/>
            </div>

            <div className='input-ctn'>
                <div style={{position:'absolute', top:'-10px', left:'15px', zIndex:10 , backgroundColor:'#F7F8F9', padding:'0 5px'}}>
                <label>Company name </label>
                </div>
                <input type="text" placeholder="Enter company name" defaultValue={'Marry Doe'} />
            </div>

            <div className='radio-ctn'>

                <label>Are you an Agency? <span className='red-dot'>*</span></label>   

                <div style={{display:'flex', gap:'10px', marginTop:'10px'}}>

                <div className='radioForm-ctn'>
                    <input type="radio" id="option1" name="accountType" value="option1" defaultChecked />
                    <label htmlFor="option1">Yes</label>
                </div>

                <div className='radioForm-ctn'>
                    <input type="radio" id="option2" name="accountType" value="option2" />
                    <label htmlFor="option2">No</label>
                </div>
                </div>

            </div>


        </div>

        </div>
        <button className='btn-createAccount' onClick={()=>navigate('/accountSetting')}>Create Account</button>
    </div>
  )
}

export default CreateAccountPage