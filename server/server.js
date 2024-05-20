//4 steps, 
//import, creating app, routing, listening

if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}


//dependencies
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');   
const Note = require('./models/note');
const notesController  = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');

//creating app
const app = express();

//configure express app, for e.g to use json or other stuff like cors
app.use(express.json());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://ammarvelous-notes.vercel.app' : true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));
app.use(cookieparser());

//connect to db
connectToDb();

//routing
app.post('/signup', usersController.signup);

app.post('/login', usersController.login);
app.get('/check-auth', requireAuth, usersController.checkAuth); //middleware example

app.get('/logout', usersController.logout); 

app.get('/notes', requireAuth, notesController.fetchNotes);

app.get('/notes/:id', requireAuth,notesController.fetchNote )

app.post('/notes', requireAuth, notesController.createNote);

app.put('/notes/:id', requireAuth, notesController.updateNote);

app.delete('/notes/:id',  requireAuth,notesController.deleteNote)

//start the server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001');
});

