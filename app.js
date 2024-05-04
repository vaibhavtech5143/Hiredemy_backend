const express = require('express');
const bodyParser = require('body-parser');
const assistantRoutes = require('./routes/assistantRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/assistant', assistantRoutes);

// Define route for GET request to '/assistant'
app.get('/assistant', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
