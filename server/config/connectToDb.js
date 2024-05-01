

if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}


// getting-started.js
const mongoose = require('mongoose');



async function connectToDb() {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to DB");
}

module.exports = connectToDb;