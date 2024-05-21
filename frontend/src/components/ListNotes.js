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
          const res = await axios.get("/notes", {withCredentials: true});
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
        <div className="grid grid-cols-4 grid-rows-1 gap-6 p-20" >
            <div className='col-span-1'>
              <CreateNotes onNoteCreated={()=>setRefresh(!refresh)}/>
            </div>
            

            <div className="card glass glass-effect-cards col-span-3">
              <div className="card-body">
                <h2 className="card-title">List of Notes</h2>

                {notes && notes.map(note => {
                return (
                  <div key={note._id} className="card w-full bg-neutral text-neutral-content opacity-80">
                    <div className="card-body justify-between flex-row">
                      <div className="content max-w-3xl items-start">
                        <h2 className="card-title ">{note.title}</h2>
                        <p className='mt-2'>{note.body}</p>
                      </div>
                      <div className="card-actions items-end mt-auto pt-4">
                        <Link className="btn btn-primary w-full max-w-sm" to={`/notes/${note._id}/edit`}>Edit</Link>
                        <button onClick={() => deleteNote(note._id, setRefresh)} className="btn btn-ghost w-full max-w-sm">Delete</button>
                      </div>
                    </div>
                  </div>
                )
                })}
              
              </div>
            </div>
            
        </div>
            
        


        

    </div>
  )
}

export default ListNotes
