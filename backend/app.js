const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend API!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

