import React, { useEffect, useState } from 'react'
import {deleteNote} from '../helpers/deleteNote';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateNotes from './CreateNotes';

const ListNotes = () => {
  // create variable
  const [notes, setNotes] = useState([]);
  const [refresh, setRefresh] = useState(false);

    //functions
    const fetchNotes = async() => {
        try {
          // Fetch notes
          const res = await axios.get("/notes");
          setNotes(res.data.notes);

          
      }
      catch(err)
      {console.log(err)};
    }
    
        //useEffect
    useEffect(() => {
        fetchNotes();
    }, [refresh]);

  return (
    <div>
        <CreateNotes onNoteCreated={()=>setRefresh(!refresh)}/>
        

        <h2>List of Notes</h2>

        {notes && notes.map(note => {
        return <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => deleteNote(note._id, setRefresh)}>Delete</button>
            <Link to={`/notes/${note._id}/edit`}>Edit</Link>
        </div>
        })}

        

    </div>
  )
}

export default ListNotes
