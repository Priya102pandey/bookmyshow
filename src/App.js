import logo from './logo.png';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import SignUpForm from './validation';
import SingnIn from './signIn';
import Api from './Api'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
       <Routes>
        <Route path='/signin' element={<SingnIn />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/Api' element={ <Api />} />
       </Routes>
   </BrowserRouter>
   
  
   </>

  );
}

export default App;
