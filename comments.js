// Create a web server
// 1. Create a new Express application
// 2. Create a new route for GET requests to '/comments'
// 3. When a GET request is made to '/comments', respond with an array of comments (e.g. `[{"username": "Todd", "comment": "lol"}, {"username": "Skyler", "comment": "rofl"}]`)

// 4. Listen for incoming requests on port 4001, and log a message to the console to confirm that the server is running.

const express = require('express');
const app = express();
const PORT = 4001;

app.get('/comments', (req, res) => {
  res.json([
    { username: 'Todd', comment: 'lol' },
    { username: 'Skyler', comment: 'rofl' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});