// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file using the express library.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});