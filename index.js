const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', router);

app.listen(4000);
console.log('listening on 4000');