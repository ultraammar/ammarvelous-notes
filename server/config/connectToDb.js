
// This file is responsible for connecting to the database.
// getting-started.js
const mongoose = require('mongoose');



async function connectToDb() {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to DB");
}

module.exports = connectToDb;