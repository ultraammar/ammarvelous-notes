import React, { useState } from 'react'
import axios from "axios";


const CreateNotes = ({onNoteCreated}) => {
    //states
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState(null);
    
    //functions
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        //create note
        const res = await axios.post("/notes", {title, body}, {withCredentials: true});
        //console.log(res);
        if(res.data.error){
            setError(res.data.error);
            return;
        }
        //refresh the notes in partent caller
            onNoteCreated();
    }
    return (
        <div style={{ marginBottom: '50px' }}>
            <div className="card  glass glass-effect-cards">
              
              <div className="card-body flex justify-center">
                <h2 className="card-title">Create note</h2>
                
                <form onSubmit={handleOnSubmit}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Title</span>
                            <span className="label-text-alt">Give your note a name</span>
                        </div>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            name="title"
                            type="text"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Description</span>
                            <span className="label-text-alt">What's it about?</span>
                        </div>
                        <textarea
                            onChange={(e) => setBody(e.target.value)}
                            name="body"
                            value={body}
                            className="input input-bordered w-full "
                        />
                    </label>
                    <div className="card-actions mt-20">
                        <button type='submit' className="btn w-full btn-primary">Make</button>
                    </div>
                
                </form>

                
              </div>
            </div>
            
            
        </div>
    );
}

export default CreateNotes