
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get All contact
// @route get /api/contact
// @access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id:req.user.id});
  res.status(200).send(contact);
});

//@desc get contact by Id
// @route get /api/contact
// @access private
const getContactById = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).send(contact);
  }
  catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
});

//@desc get post contact
// @route get /api/contact
// @access private
const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Invalid name or email , phone");
  } else {
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id:req.user.id
    });
    // contact.save();
    res.status(200).json(contact);
  }
});

//@desc get All contact
// @route get /api/contact
// @access private
const putContact = asyncHandler(async (req, res) => {
  // const existingContact = await Contact.findById(req.params.id);
  const contact =  await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  // contact.save();
  res.status(200).send(contact);
});

//@desc get All contact
// @route get /api/contact
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({_id : req.params.id});
  res.status(200).json({
    success: true,
    message: "Contact deleted"
  })
});

//@desc get current user information
// @route get /api/contact
// @access private
// const getCurrentUser = asyncHandler(async (req, res) => {

//   res.status(200).send(req.user);
// });

module.exports = {
  getContact,
  postContact,
  getContactById,
  putContact,
  deleteContact,
};


