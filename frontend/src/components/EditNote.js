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
                    const res = await axios.get(`/notes/${id}`);
            
                    // Set to state
                    setNote(res.data.note);
                    setTitle(res.data.note.title);
                    setBody(res.data.note.body);

                } catch (error) {
                    console.error("Error fetching notes: ", error);
                }
            };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //update note
        
        axios.put(`/notes/${id}`, {title, body})
        .then(() => {
                //redirect
                window.location.href = "/";
        })
        .catch((error) => {
                console.error("Error updating note: ", error);
        })
    }

    return (
        <div>
            <h2>Edit Note</h2>
            <form onSubmit={handleOnSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" />
                <textarea onChange={(e) => setBody(e.target.value)} name="body" value={body} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditNote