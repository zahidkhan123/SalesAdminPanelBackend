import mongoose from 'mongoose';
// const keys = require('../config/keys.js');
const uri = process.env.MONGO_URI;
mongoose.connect(uri);

export const connection = mongoose.connection;
