const bodyParse = require('body-parser');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AuthRouter = require('./Routes/AuthRouter');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) =>{
    console.log(error)
});

database.once('connected', () =>{
    console.log('Database Connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running ✅" });
});


app.use('/auth', AuthRouter);

app.listen(8080, () =>{
    console.log(`Server Started at ${8080}`)
});