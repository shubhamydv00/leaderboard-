const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer'); 
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', userRoutes)
app.use('/' ,(req,res)=>{
    console.log('server is running');
    res.send('server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));