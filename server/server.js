const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');


//application
const app = express();
const PORT = process.env.PORT || 3005;
app.use(bodyParser.json());

app.use(express.static(__dirname + './../build'))

app.get('*', function(req, res) {
   res.sendFile(path.resolve((__dirname+'./../build/index.html')));
});

app.listen(PORT, () => {
    console.log('Server Started on http://localhost:%s',PORT);
    console.log('Press CTRL + C to stop server');
});