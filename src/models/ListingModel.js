const mongoose = require('mongoose');


const listSchema = new mongoose.Schema({
    category: {
        type: mongoose.ObjectId,
        ref: "Categories"
    },
    websiteLink: {
        type: String,
        required: true
    },
    // slug: {
    //     type: String,
    //     required: true
    // },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Listing', listSchema);
