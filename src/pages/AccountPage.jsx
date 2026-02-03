import React from 'react'

const AccountPage = () => {
  return (
    <div className='account-page-ctn'>
        <div className='top'>
            <text>Account Settings</text>
        </div>

        <div className='info-ctn'>
            <div style={{display:'flex'}}>
                 <div style={{position:'relative', marginRight:'15px'}}>
                    <img alt='profile Pic'  src="profilePic.png"></img> 
                    <img alt='camera Icon' src="cameraIcon.svg" style={{position:'absolute' , bottom:'2px' , right:'5px'}}></img> 
                 </div>

                <div>
                    <h5 style={{marginBottom:'5px'}}>Marry Doe</h5>
                    <text>Marry@Gmail.Com</text>
                </div>

            </div>


            <text>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</text>
        


        </div>



    </div>
  )
}

export default AccountPage