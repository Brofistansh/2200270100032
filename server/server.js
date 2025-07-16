const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB connected'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/url', require('./routes/url'));
app.use('/r', require('./routes/redirect'));

app.listen(5000, () => console.log('Server running on port 5000'));
