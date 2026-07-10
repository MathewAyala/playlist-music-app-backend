const express = require('express');
const app = express();
const PORT = 6000;
const db = require('./db');

app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

