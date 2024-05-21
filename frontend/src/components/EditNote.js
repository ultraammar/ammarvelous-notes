import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditNote = () => {
        const { id } = useParams();
        const [note, setNote] = useState({});
        const [title, setTitle] = useState("");
        const [body, setBody] = useState("");

        useEffect(() => {
                fetchNote();
            }, []);

        const fetchNote = async () => {
                try {
                    // Fetch note
                    const res = await axios.get(`/notes/${id}`, {withCredentials: true});
            
                    // Set to state
                    setNote(res.data.note);
                    setTitle(res.data.note.title);
                    setBody(res.data.note.body);

                } catch (error) {
                    console.error("Error fetching notes: ", error);
                    console.log("Error fetching notes: ", error);
                }
            };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //update note
        
        axios.put(`/notes/${id}`, {title, body}, {withCredentials: true})
        .then(() => {
                //redirect
                window.location.href = "/";
        })
        .catch((error) => {
                console.error("Error updating note: ", error);
        })
    }

    return (
    <div className='flex justify-center'>
        <div className='py-20 lg:p-20 lg:w-[550px] lg:hover:w-2/5 ease-in-out duration-500'>

            <div className="card  glass glass-effect-cards">
              
              <div className="card-body flex justify-center">
                <h2 className="card-title">Update Note</h2>
                
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
                        <button type='submit' className="btn w-full btn-primary">Update</button>
                    </div>
                
                </form>

                
              </div>
            </div>
        </div>
    </div>
    )
}

export default EditNote