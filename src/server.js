const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const User = require('./models/User');
const authController = require('./controllers/authController');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nestease', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', authController.register);
app.post('/login', authController.login);

app.use(authMiddleware.protect);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
