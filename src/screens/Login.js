import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export default function Login() {

  const [credentials, setCredentials] = useState({email: "",password: ""});

  const navigate = useNavigate();

  const HandleSubmit = async(e) => {

    e.preventDefault();
    const response =await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credentials.email , password: credentials.password})
    })

    const jsonResponse = await response.json();
    console.log(jsonResponse);
      
    if(!jsonResponse.success)
    {
      alert("Enter valid credentials");
    }

    if(jsonResponse.success)
    {
      localStorage.setItem("authToken" , jsonResponse.authToken);
      localStorage.setItem("userEmail" , credentials.email);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }


    
    

  }

  const HandleChange = (event) =>{

    setCredentials({...credentials , [event.target.name] : event.target.value});
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={HandleSubmit}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={HandleChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={HandleChange}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="m-3 btn btn-danger" to="/signup">I'm a new User</Link>
        </form>
      </div>
    </>
  )
}
