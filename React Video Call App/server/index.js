const http = require('http');
const express = require('express');
const path = require('path');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback route for handling requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});