const express = require('express');     // loads express

const app = express();      // created an app instance of express
const PORT = 5001;          // spinning up a port

app.use(express.static('server/public'));   // app will utilize the files in the public folder
app.use(express.urlencoded());

app.listen(PORT, () => {   
    console.log('listening on port', PORT);
});     // spin up the server and keep it open
// anonymous function



app.post('/operations', (req, res) => {
    // console.log(req.body);
    if (req.body.operand === 'add') {
        sum = Number(req.body.num1) + Number(req.body.num2);
        console.log(sum);
    }

    res.sendStatus(201);  // 201 means created
});     


