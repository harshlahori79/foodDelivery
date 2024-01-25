
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';

import { CartProvider } from './components/ReducerContext';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import MyOrder from './screens/Myorders';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.css';

function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
    <CartProvider>
            <Router>
    <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path ="/login" element = {<Login/>} />
        <Route exact path = "/signup" element = {<Signup/>} />
        <Route exact path = "/myorders" element = {<MyOrder/>} />
      </Routes>
    </div>
    </Router>

    </CartProvider>

  );
}

export default App;
