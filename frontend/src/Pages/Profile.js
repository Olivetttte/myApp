import React from 'react'
import { Toast } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");

  // if (firstName === "" || lastName === "") {
  //   setError("Please fill all fields");
  //   return;
  // } 
  
  const navigateToDashboard = () => {
    navigate('/dashboardproxi')
  }
  const notifyProfile= ()=> toast('Profile Updated')

  function functionWrapperB (){
  notifyProfile();
  
  }

  return (
    <div className='container'>
       <ToastContainer />
        <div className='row' style={{marginTop:'50px', marginBottom:'80px'}}>
            <div className='col-4'>
            <h4>Profile</h4>
            <label>First Name</label>
            <input type='text' className='form-control' id='firstName' placeholder='First Name' />
            <br />
            <label>Last Name</label>
            <input type='text' className='form-control' id='lastName' placeholder='Last Name' />
            <br />
            <label>Phone Number</label>
            <input type='text' className='form-control' placeholder='Email' />
            <br />
            <input type='text' className='form-control' placeholder='Phone' />
            <br />
            <input type='text' className='form-control' placeholder='Address' />
            <br />
            <input type='text' className='form-control' placeholder='City' />
            <br />
            <input type='text' className='form-control' placeholder='State' />
            <br />
            <input type='text' className='form-control' placeholder='LGA' />
            <br />
            </div>
            <div className='col-4'>
            <h4>Upload Documents</h4>
            <input type='file' className='form-control' placeholder='' />
            <br />
            <input type='file' className='form-control' placeholder='' />
            <br />
            <input type='file' className='form-control' placeholder='' />
            <br />
            <input type='file' className='form-control' placeholder='' />
            <br />
            {/* click to add more */}
            <button className='btn btn-primary'>Add More</button>

       
            <br />
             </div>
            <div className='col-4'>
            <h4>Change Password</h4>
            <input type='text' className='form-control' placeholder='Current Password' />
            <br />
            <input type='text' className='form-control' placeholder='New Password' />
            <br />
            <input type='text' className='form-control' placeholder='Confirm Password' />
            <br />
            <button className='btn btn-primary' onClick={functionWrapperB}>Submit</button>
            <a href='/dashboardproxi' className='' style={{marginLeft:'10px'}}>return to dashboard</a>
            </div>
        </div>

    </div>
  )
}

export default Profile