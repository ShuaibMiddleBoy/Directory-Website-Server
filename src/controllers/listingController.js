

// controllers

const ListingModel = require("../models/ListingModel");

// create Listing controller
const createListingController = async (req, res) => {

    try {

        const { category, websiteLink, phone, address } = req.body;

        switch (true) {
            case !category:
                return res.status(404).send({ error: "Category is Required" })
            case !websiteLink:
                return res.status(404).send({ error: "Website Link is Required" })
            case !phone:
                return res.status(404).send({ error: "Phone is Required" })
            case !address:
                return res.status(404).send({ error: "Address is Required" })
        }

        const listing = await new ListingModel({ category, websiteLink, phone, address }).save();

        res.status(201).send({
            success: true,
            message: "New Listing Created",
            listing
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Creating Listing",
            error
        })
    }

}



// get all listings controller
const getAllListings = async (req, res) => {
    try {
        const listings = await ListingModel.find({}).populate('category');
        res.status(201).send({
            success: true,
            message: "Successfully showed All Listings",
            listings,
            totalLengthOfListings: listings.length
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting all products",
            error
        })
    }
}


// get single listing controller
const getSingleListing = async (req, res) => {
    try {
        const { id } = req.params;
        const list = await ListingModel.findById(id).populate('category');
        res.status(401).send({
            success: true,
            message: "List Showed Successfully!",
            list
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while geting single list",
            error
        })
    }
}


// delete listing controller
const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await ListingModel.findByIdAndDelete(id)
        res.status(201).send({
            success: true,
            message: "List Deleted Successfully!",
            listing
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting the lsit",
            error
        })
    }
}


// update Listing controller
const updateListingController = async (req, res) => {

    try {

        const { category, websiteLink, phone, address } = req.body;


        const listing = await ListingModel.findByIdAndUpdate(req.params.id, { category, websiteLink, phone, address }, { new: true });

        res.status(201).send({
            success: true,
            message: "Listing upated successfully",
            listing
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Updating Listing",
            error
        })
    }

}

module.exports = { createListingController, getAllListings, getSingleListing, deleteListing, updateListingController }
