const express = require('express');
const app = express();
const port = 3180;

const fs = require('fs'); //import filesystem to read template views (not sure if I will need with Pug)
const path = require('path'); // Using Path


//error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});