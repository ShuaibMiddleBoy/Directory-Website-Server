const express = require('express');
const { registerController, loginController, testingrouter } = require('../controllers/registerController');
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
// Router Object
const router = express.Router();


// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || METHOD POST
router.post('/login', loginController);

router.get('/test', requireSignIn, isAdmin, testingrouter)
module.exports = router;
