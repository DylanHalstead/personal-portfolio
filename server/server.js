require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  try {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/projects', require('./routes/api/projects'));
    app.use('/api/tags', require('./routes/api/tags'));

    const BACKEND_PORT = process.env.BACKEND_PORT || 5000;
    app.listen(BACKEND_PORT, () => {
      console.log(`Server is running on port ${BACKEND_PORT}.`);
    });
  } catch (error) {
    console.error('There was an issue with Express:', error);
  }
})();
