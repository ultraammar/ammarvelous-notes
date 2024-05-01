//4 steps, 
//import, creating app, routing, listening

if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}


//dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');   
const Note = require('./models/note');
const notesController  = require('./controllers/notesController');

//creating app
const app = express();

//configure express app, for e.g to use json or other stuff like cors
app.use(express.json());
app.use(cors());

//connect to db
connectToDb();

//routing
app.get('/notes', notesController.fetchNotes);

app.get('/notes/:id',notesController.fetchNote )

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

app.delete('/notes/:id', notesController.deleteNote)

//start the server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001');
});
