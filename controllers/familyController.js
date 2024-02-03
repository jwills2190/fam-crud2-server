const Fam = require("../models/familyModel");

async function getAllFamily(req, res) {
    try {
        let result = await Fam.find({})

        res.json({
            message: "success",
            payload: result
        })

    } catch (error) {
        res.json({
            message: "failure",
            payload: `getAllFamily error: ${error}`
        })
    }
}

module.exports = {
    getAllFamily
}