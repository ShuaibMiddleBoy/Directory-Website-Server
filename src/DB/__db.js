const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/directoryListing').then(() => {
    console.log('DB Connected!!'.bgGreen);
}).catch((err) => {
    console.log("DB Connection Failed!!".bgRed);
})


module.exports = mongoose;
