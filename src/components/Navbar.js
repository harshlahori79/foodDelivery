import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useCartState } from './ReducerContext';
import Modal from '../Modal';
import Cart from '../screens/Cart';


export default function Navbar() {

  let data = useCartState();

  const [cartview , setCartview] = useState(false);


  const navigate = useNavigate();
  const handleClick=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }





  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand fs-1" href="#">Food Delivery</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {localStorage.getItem("authToken")?
        <Link className="nav-link active fs-5 " aria-current="page" to="/myorders">My Orders</Link>
        :""
        }
       
      </ul>

      {!localStorage.getItem("authToken")?
      <div className='d-flex'>
          <Link className="nav-link bg-white text-success m-2" to="/login">Login</Link>
          <Link className="nav-link bg-white text-success m-2" to="/signup">Signup</Link>
      </div>
      :
      <div className='d-flex'>
      <div className="nav-link bg-white text-success m-2" onClick={()=> setCartview(true)} >
        My Cart
        <Badge bg="danger">{data.length}</Badge>
      </div>
      {cartview ? <Modal onClose={()=>{setCartview(false)}}><Cart></Cart></Modal> : null}
      <div className="nav-link bg-white text-danger m-2" onClick={handleClick}>
        Logout
      </div>
        </div>
      }

      
    </div>
  </div>
</nav>
</>
  )
}
