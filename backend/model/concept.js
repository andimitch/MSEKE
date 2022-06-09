const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conceptSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        default: null,
    },
    description: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Description", 
        default: [],
    },
    courses: {
        type: [String],
        default: [],
    },    
    related: {
        type: [String],
        default: [],
    },
})


module.exports = mongoose.model("Concept", conceptSchema);

