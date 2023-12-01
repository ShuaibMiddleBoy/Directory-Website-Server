const express = require('express');
const router = express.Router();
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');
const { createListingController, getAllListings, getSingleListing, deleteListing, updateListingController } = require('../controllers/listingController');


// routes

// create Listing route
router.post("/create-list", requireSignIn, createListingController)

// get all listing route
router.get('/all-lists', getAllListings);

// get single list route
router.get('/single-list/:id', getSingleListing);

// update list route
router.put('/update-list/:id', isAdmin, requireSignIn, updateListingController);

// Delete list route
router.delete('/delete-list/:id', isAdmin, requireSignIn, deleteListing);




module.exports = router;
