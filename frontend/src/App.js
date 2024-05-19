import React from 'react';
import {BrowserRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import EditNote from "./components/EditNote";
import ListNotes from "./components/ListNotes";
import LoginPage from 'pages/LoginPage';
import RequireAuth from 'components/RequireAuth';
import SignupPage from 'pages/SignupPage';
import LogoutPage from 'pages/LogoutPage';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
        <Routes>
          
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path="/notes/" element={<RequireAuth><ListNotes/></RequireAuth>}/>
          <Route path='/notes/:id/edit' element={<EditNote/>}/>
        </Routes>
      </BrowserRouter>
      
      
        

    </div>
  );
}

export default App;
