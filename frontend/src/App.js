import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import EditNote from "./components/EditNote";
import ListNotes from "./components/ListNotes";

function App() {
  
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path="/notes/" element={<ListNotes/>}/>
          <Route path='/notes/:id/edit' element={<EditNote/>}/>
        </Routes>
      </BrowserRouter>
      
      
        

    </div>
  );
}

export default App;
