const express = require('express');
const { getUsers, claimPoints, addUser } = require("../controllers/UserController");
const router = express.Router();

router.get('/users', getUsers);

router.put('/users/:userId/claim', claimPoints);

router.post('/users', addUser);

module.exports = router;
