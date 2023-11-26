const express = require('express');
const { registerController, loginController, forgotPasswordController } = require('../controllers/registerController');
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

// forgot password route
router.post('/forgot-password', forgotPasswordController)
module.exports = router;
