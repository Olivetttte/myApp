import React, { useContext, useState} from 'react'
import {Context} from '../Components/store/actions/appContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Login.css'
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import {useNavigate} from 'react-router-dom';
 

export const Login =() => {
  const {actions,store} = useContext(Context);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const history = useNavigate();

  

  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill all fields");
      return;
    } 

    const response = await actions.login(email, password).then((response) => {
      
      if (response) {
        history('/Dashboardproxi');
      } else {
        setError('Invalid credentials');
      }
      
    });

  };  
  if (store.token && store.token != "" && store.token != undefined) history("/Dashboardproxi");
  
  return (
    <main className='container' id='majordiv'>
      {store.token && store.token!= "" && store.token != undefined ? ("you are logged in with this token " + store.token 
      ) : (
      <div>
       <Form>
       <div class="col-md-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </div>
      <div class="col-md-4">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
        </div>
    <RadioGroup name="use-radio-group" defaultValue="first">
  <FormControlLabel value="first" label="Principal" control={<Radio />} />
  <FormControlLabel value="second" label="Proxy" control={<Radio />} />
  <FormControlLabel value="third" label="Corporate" control={<Radio />} />
</RadioGroup>
      <Button variant="primary" type="submit" onClick={handleClick} >
        Submit
      </Button>
    </Form>
    {error && <p className="error" style={{color:'red'}}>{error}</p>}
   
    <div className='col-md-4'> 
        <span>Don't have an account? <a href='/Register'>Register</a></span>
    </div>
 
    </div>
     )} 
    
    </main>
  )

}





export default Login