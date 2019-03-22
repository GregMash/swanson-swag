const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    numWords: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = quoteSchema;