const express = require('express');
const assistantRoutes = require('./routes/assistantRoutes');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.use('/static', express.static(path.join(__dirname, 'static')));

// Routes
app.use('/assistant', assistantRoutes);

// Error handling for undefined routes
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
