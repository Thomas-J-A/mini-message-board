const express = require('express');
const path = require('path');

// Import routes
const indexRouter = require('./routes/index.js');
const newRouter = require('./routes/new.js');

const app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Setup middleware
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routes
app.use('/', indexRouter);
app.use('/new', newRouter);

// Start up server
app.listen(3000, () => {
  console.log('Server listening for requests on port 3000');
});
