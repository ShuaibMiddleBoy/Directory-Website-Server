const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Directory_Listing:1234@cluster0.v3fivoz.mongodb.net/Directory_Listing').then(() => {
    console.log('DB Connected!!'.bgGreen);
}).catch((err) => {
    console.log("DB Connection Failed!!".bgRed);
})


module.exports = mongoose;
