import React from 'react';
import {BrowserRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import EditNote from "./components/EditNote";
import ListNotes from "./components/ListNotes";
import LoginPage from 'pages/LoginPage';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/notes">Notes</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
        <Routes>
          
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/notes/" element={<ListNotes/>}/>
          <Route path='/notes/:id/edit' element={<EditNote/>}/>
        </Routes>
      </BrowserRouter>
      
      
        

    </div>
  );
}

export default App;
