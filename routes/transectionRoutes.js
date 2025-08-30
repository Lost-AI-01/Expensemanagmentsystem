const express = require("express");
const { addTransection, getAllTransection } = require("../controllers/transectionController");

//router object
const router = express.Router();

//routers
// add transection using post method

router.post('/add-transection', addTransection)

// get transections

router.post('/get-transections', getAllTransection)

module.exports = router;