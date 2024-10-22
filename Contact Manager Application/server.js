/**
 * @fileoverview Main application file
 * @author <NAME>
 */

"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");

/**
 * Express instance
 * @type {express.Application}
 */
const app = express();

/**
 * Port to listen on
 * @type {number}
 */
const port = process.env.PORT || 8080;

/**
 * Connect to database
 */
connectDB();

/**
 * Parse URL-encoded data
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Parse JSON data
 */
app.use(express.json());

/**
 * Use error handler middleware
 */
app.use(errorHandler);

/**
 * Import routes
 */
app.use("/", require("./routes/contactRoutes"));
app.use("/", require("./routes/userRoutes"));

/**
 * Start the server
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});