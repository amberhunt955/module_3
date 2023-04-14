const mongoose = require('mongoose');

// Create the schema
const logSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean}
},
{timestamps: true}
)

// Create and export the model
const Log = mongoose.model('Log', logSchema)
module.exports = Log;