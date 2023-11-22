const mongoose = require('mongoose');

// const DB = 'mongodb://127.0.0.1/habittTracker'
  const DB = "mongodb+srv://jayhindsirmps9959:RhMrVQ4gaxbapv2P@cluster0.mmzltxh.mongodb.net/Habittracker"


// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  