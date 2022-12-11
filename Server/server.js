const express = require('express');     // loads express

const app = express();      // created an app instance of express
const PORT = 5001;          // spinning up a port

app.use(express.static('server/public'));   // app will utilize the files in the public folder
app.use(express.urlencoded());

app.listen(PORT, () => {   
    console.log('listening on port', PORT);
});     // spin up the server and keep it open
// anonymous function

app.get('/operations', function(req, res) {
    console.log("request for /operations was made");
    res.send(answer);

})

app.post('/operations', (req, res) => {     // post request function
    // console.log(req.body);
    let results = 0;
    if (req.body.operand === 'add') {
        results = Number(req.body.num1) + Number(req.body.num2);
        // console.log(sum);
    } else if (req.body.operand === 'subtract') {
        results = Number(req.body.num1) - Number(req.body.num2);
        // console.log(difference);
    } else if (req.body.operand === 'multiply') {
        results = Number(req.body.num1) * Number(req.body.num2);
        // console.log(product);
    }else if (req.body.operand === 'divide') {
        results = Number(req.body.num1) / Number(req.body.num2);
        // console.log(dividend);
    }
    console.log(req.body);
    req.body.results = results; 
    // req.body.difference = difference;
    answer.push(req.body);

    res.sendStatus(201);  // 201 means created
    console.log(answer);
});     

let answer = [];    // this is where the server stores the math solutions that will be the response sent from the server


