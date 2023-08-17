const express = require('express');

const {registration, logIn} = require('../controllers/controller')
// {all controller methods}

// create a router
const router = express.Router();

// ps- there can be multiple routers for suppose admin panel router, user panel router


router.post('/register',registration);
router.post('/login',logIn);

module.exports = router;
