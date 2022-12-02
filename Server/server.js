const express = require('express');     // loads express

const app = express();
const PORT = 5001;

app.use(express.static('server/public'));

app.get()