import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function () {

  const [credentials, setCredentials] = useState({ name: "", email: "",phone:"", password: "", geoLocation: "" })

  const HandleSubmit = async(e) => {

    e.preventDefault();
    const response =await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:credentials.name , email:credentials.email , phone : credentials.phone ,password: credentials.password, location : credentials.geoLocation})
    })

    const jsonResponse = await response.json();
    console.log(jsonResponse);
      
    if(!jsonResponse.success)
    {
      alert("Enter valid credentials");
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
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputname" name='name' value={credentials.name} onChange={HandleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={HandleChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputphone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="exampleInputphone" name='phone' value={credentials.phone} onChange={HandleChange} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={HandleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="geoLocation" className="form-label">Location</label>
            <input type="text" className="form-control" id="exampleInputlocation" name='geoLocation' value={credentials.geoLocation} onChange={HandleChange}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="m-3 btn btn-danger" to="/login">Already a User</Link>
        </form>
      </div>
    </>
  )
}
