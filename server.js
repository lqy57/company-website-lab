// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require("express");
const app = express();

// -- database


// -- config
const port = 3000;

// =======================
//     MIDDLEWARE
// =======================
// static files
app.use(express.static("public"));