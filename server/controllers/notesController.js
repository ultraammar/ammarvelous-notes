const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //find notes
  const notes = await Note.find({user: req.user._id});
 
  //respond with them
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  //get the id from the request
  const id = req.params.id;

  //find the note with the id

  const note = await Note.findOne({_id: id, user: req.user._id});

  //respond with the note
  res.json({ note: note });
};

const createNote = async (req, res) => {
    //get the sent data from request body
    const title = req.body.title;
    const body = req.body.body;

    //create a note with the data
    const note = await Note.create({
        title: title,
        body: body,
        user: req.user._id
    });

    //respond with new note
    res.json({note: note});  
    
}

const updateNote = async (req, res) => {
    //get the id from the request
    const id = req.params.id;

    //get data off from request body
    const title = req.body.title;
    const body = req.body.body;

    //find the note with the id
    await Note.findOneAndUpdate({_id: id, user: req.user._id}, {
        title:title,
        body:body,
    })

    //find to respond with the updated note
    const note = await Note.findById(id);

    //respond with it
    res.json({note: note});

}

const deleteNote = async (req, res) =>{
    //get the id from the request
    const id = req.params.id;

    //delete the note with the id
    await Note.deleteOne({_id: id, user: req.user._id}); 
    
    //Respond
    res.json({success: "record deleted"});
}


module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
}