const ListingModel = require("../models/ListingModel");

// Create Listing controller
const createListingController = async (req, res) => {
  try {
    const { category, titleName, websiteLink, phone, address, zipCode } = req.body;

    switch (true) {
      case !category:
        return res.status(404).send({ error: "Category is Required" });
      case !titleName:
        return res.status(404).send({ error: "Title Name is Required" });
      case !websiteLink:
        return res.status(404).send({ error: "Website Link is Required" });
      case !phone:
        return res.status(404).send({ error: "Phone is Required" });
      case !address:
        return res.status(404).send({ error: "Address is Required" });
      case !zipCode:
        return res.status(404).send({ error: "Zip Code is Required" });
    }

    const listing = await new ListingModel({
      category,
      titleName,
      websiteLink,
      phone,
      address,
      zipCode,
    }).save();

    res.status(201).send({
      success: true,
      message: "New Listing Created",
      listing,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating Listing",
      error,
    });
  }
};

// Get all listings controller
const getAllListings = async (req, res) => {
  try {
    const listings = await ListingModel.find({}).populate('category');
    res.status(201).send({
      success: true,
      message: "Successfully showed All Listings",
      listings,
      totalLengthOfListings: listings.length
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all products",
      error,
    });
  }
};

// Get single listing controller
const getSingleListing = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await ListingModel.findById(id).populate('category');
    res.status(401).send({
      success: true,
      message: "List Showed Successfully!",
      list
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single list",
      error,
    });
  }
};

// Delete listing controller
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await ListingModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "List Deleted Successfully!",
      listing
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting the list",
      error,
    });
  }
};

// Update Listing controller
const updateListingController = async (req, res) => {
  try {
    const { category, titleName, websiteLink, phone, address, zipCode } = req.body;

    const listing = await ListingModel.findByIdAndUpdate(req.params.id, { category, titleName, websiteLink, phone, address, zipCode }, { new: true });

    res.status(201).send({
      success: true,
      message: "Listing updated successfully",
      listing
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating Listing",
      error,
    });
  }
};

// Get listings by titleName controller
const getListingByTitle = async (req, res) => {
    try {
      const { titleName } = req.params;
      const listings = await ListingModel.find({ titleName });
      res.status(200).json({
        success: true,
        message: "Listings fetched successfully by titleName",
        listings,
      });
    } catch (error) {
      console.error("Error while fetching listings by titleName: ", error);
      res.status(500).json({
        success: false,
        message: "Error while fetching listings by titleName",
        error,
      });
    }
  };
  
  module.exports = {
    createListingController,
    getAllListings,
    getSingleListing,
    deleteListing,
    updateListingController,
    getListingByTitle,
  };