const express = require("express");
const router = express.Router();

const {
    getAllFamily
} = require("../controllers/familyController")

router.get("/allFamily", getAllFamily);

module.exports = router;