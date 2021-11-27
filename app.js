const express = require('express');
const path = require('path');

const port = process.env.PORT || '3000';

// Import routes
const indexRouter = require('./routes/index.js');

const app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Setup middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Initialize routes
app.use('/', indexRouter);

// Start up server
app.listen(port, () => {
  console.log(`Server listening for requests on port ${ port }`);
});
