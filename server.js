const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB();

const app = express();
app.use(express.json()); // Using built-in JSON parser instead of body-parser

app.use('/', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
