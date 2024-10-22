const express = require('express');
const router = express.Router();
const { getContact , postContact, getContactById, putContact, deleteContact } = require("../controller/contactController");
const validateToken = require("../middlewares/validateTokenHandler"); 

router.use(validateToken);
router.route("/").get(getContact).post(postContact);
router.route("/:id").get(getContactById).put(putContact).delete(deleteContact);


module.exports = router;