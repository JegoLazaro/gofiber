import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './Components/FormsComponents/Login'
import Register from './Components/FormsComponents/Register'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>  
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
</Router>
);

reportWebVitals();
