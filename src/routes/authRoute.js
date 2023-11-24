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


// protect route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(201).send({ ok: true });
})
module.exports = router;
