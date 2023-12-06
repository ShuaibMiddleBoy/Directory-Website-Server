const express = require('express');
const router = express.Router();
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');
const { createListingController, getAllListings, getSingleListing, deleteListing, updateListingController, getListingByTitle } = require('../controllers/listingController');

// Create Listing route
router.post("/create-list", createListingController);

// Get all listing route
router.get('/all-lists', getAllListings);

// Get single list route
router.get('/single-list/:id', getSingleListing);

// Update list route
router.put('/update-list/:id', isAdmin, requireSignIn, updateListingController);

// Delete list route
router.delete('/delete-list/:id', isAdmin, requireSignIn, deleteListing);




module.exports = router;