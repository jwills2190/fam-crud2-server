const mongoose = require("mongoose");

const familySchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Relation: {
            type: String
        },
        Age: {
            type: Number,
        },
        City: {
            type: String
        },
        Birthplace: {
            type: String
        },
        Lived_In: {
            type: []
        }

    }
)

const Fam = mongoose.model("Fam", familySchema);
module.exports = Fam;