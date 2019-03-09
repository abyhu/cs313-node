const express = require('express');
const path = require('path');
const calc = require('./calculate')
const app = express();
const PORT = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//rule of how to process the form
app.get('/calculateShipping', calc.calculate); 

//rule for the home page and start the server listening
app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));




