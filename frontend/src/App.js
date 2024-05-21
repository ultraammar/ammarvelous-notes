import React from 'react';
import {BrowserRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import EditNote from "./components/EditNote";
import ListNotes from "./components/ListNotes";
import LoginPage from 'pages/LoginPage';
import RequireAuth from 'components/RequireAuth';
import SignupPage from 'pages/SignupPage';
import LogoutPage from 'pages/LogoutPage';
import { NavBar } from 'components/NavBar';

function App() {
  
  
  return (
    <div className="App min-h-screen bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: `url('./media/glow-bottom.svg')`}}>
      <BrowserRouter>
      <NavBar/>
      
      <div className="p-10" >
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path="/notes/" element={<RequireAuth><ListNotes/></RequireAuth>}/>
          <Route path='/notes/:id/edit' element={<EditNote/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
      
        

    </div>
  );
}

export default App;
