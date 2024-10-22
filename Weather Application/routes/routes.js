const express = require('express');
const router  = express.Router();
const {getMethod, postCity} = require("../controller/controller");

router.get("/", getMethod); 
router.post("/city", postCity);


module.exports = router;