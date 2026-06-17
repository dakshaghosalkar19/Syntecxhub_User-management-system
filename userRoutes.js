const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const basicAuth = require('../middleware/auth');

// Route handling for base endpoint: /api/users
router.route('/')
  .post(basicAuth, createUser)
  .get(basicAuth, getUsers);

// Route handling for specific ID endpoint: /api/users/:id
router.route('/:id')
  .put(basicAuth, updateUser)
  .delete(basicAuth, deleteUser);

module.exports = router;