import React from "react";
import "../Styles/Register.css";
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [lga, setLga] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const notify = () => toast("Registration successfull. Please log in to continue");


  const handleSubmit = async (e) => {
    
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     return;
  //   } else {
  //     setError("");
  //   }
  //   try {
  //     setLoading(true);
  //     const response = await fetch("http://127.0.0.1:5000/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //         firstName,
  //         lastName,
  //         phoneNumber,
  //         address,
  //         city,
  //         state,
  //         lga,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };
  

  <ToastContainer />
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "" || firstName === "" || lastName === "" || phoneNumber === "" || address === "" || city === "" || lga === "") {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
      }
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          // CORS_ALLOW_HEADERS: "Content-Type",
          // CORS_ALLOW_ALL_ORIGINS: "true",
          // mode: "no-cors",
          "Content-Type": "application/json",

          // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          address,
          city,
          state,
          lga,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }
      setError("");
      setLoading(false);
      notify();
      window.location.href = "/Login";
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main id="major">
        {/* <ToastContainer /> */}
      <div className="container">
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-md-4">
            <label for="firstname" class="form-label">
              Firstname
            </label>
            <input type="text" class="form-control" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div class="col-md-4">
            <label for="lastname" class="form-label">
              Lastname
            </label>
            <input type="text" class="form-control" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div class="col-md-4">
            <label for="confirmPassword" class="form-label">
              Confirm Password
            </label>
            <input type="password" class="form-control" id="confirmPassword"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <div class="col-md-4">
            <label for="phoneNumber" class="form-label">
              Phone Number
            </label>
            <input type="text" class="form-control" id="phoneNumber"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={address} onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select" value={state} onChange={(e) => setState(e.target.value)}> 
              <option selected >Choose...</option>
              <option>Lagos</option>
              <option>Oyo</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="lga" class="form-label">
              LGA
            </label>
            <input type="text" class="form-control" id="lga"  value={lga} onChange={(e) => setLga(e.target.value)}/>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                I Accept the Terms & Conditions
              </label>
            </div>
          </div>
    <RadioGroup name="use-radio-group" defaultValue="first">
  <FormControlLabel value="first" label="Principal" control={<Radio />} />
  <FormControlLabel value="second" label="Proxy" control={<Radio />} />
  <FormControlLabel value="third" label="Corporate" control={<Radio />} />

</RadioGroup>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
        {error && <p className="error" style={{color:'red'}}>{error}</p>}

        <div>
          <span>
            Already have an account? <a href="/Login">Login</a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Register;
