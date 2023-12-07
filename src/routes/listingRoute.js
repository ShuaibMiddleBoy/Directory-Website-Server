const express = require('express');
const router = express.Router();
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');
const {
  createListingController,
  getAllListings,
  getSingleListing,
  getListingByTitle,
  updateListingController,
  deleteListingController,
} = require('../controllers/listingController');

// Create Listing route
router.post("/create-list", createListingController);

// Get all listing route
router.get('/all-lists', getAllListings);

// Get single list route
router.get('/single-list/:id', getSingleListing);

// Get listings by titleName route
router.get('/by-title/:titleName', getListingByTitle);

// Update listing route
router.put('/update-list/:id', updateListingController);

// Delete listing route
router.delete('/delete-list/:id', deleteListingController);

module.exports = router;