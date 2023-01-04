require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();

// Make server cors compliant
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establishing projects routes
app.use('/api/projects', require('./routes/api/projects'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});