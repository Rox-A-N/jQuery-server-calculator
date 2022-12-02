const express = require('express');     // loads express

const app = express();      // created an app instance of express
const PORT = 5001;          // spinning up a port

app.use(express.static('server/public'));   // app will utilize the files in the public folder

app.post('/operations', (req, res) => {
    res.sendStatus(201);  // 201 means created
});     

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});     // spin up the server and keep it open
        // anonymous function