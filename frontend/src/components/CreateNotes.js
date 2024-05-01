import React, { useState } from 'react'
import axios from "axios";


const CreateNotes = ({onNoteCreated}) => {
    //states
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    
    //functions
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        //create note
        const res = await axios.post("http://localhost:3001/notes", {title, body});
        //console.log(res);
        if(res.data.error){
            setError(res.data.error);
            return;
        }
        //refresh the notes in partent caller
            onNoteCreated();
    }
    return (
        <div>
            <h2>Create note</h2>
            <form onSubmit={handleOnSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>
                                <input
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    name="title"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Body:</td>
                            <td>
                                <textarea
                                    onChange={(e) => setBody(e.target.value)}
                                    name="body"
                                    value={body}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Create note</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default CreateNotes