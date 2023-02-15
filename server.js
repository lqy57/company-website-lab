// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require("express");
const app = express();

// -- database
const links = require("./models/linksPage");
const works = require("./models/pastWork");
const staff = require("./models/staffPage");

// -- config
const port = 3000;

// =======================
//     MIDDLEWARE
// =======================
// static files
app.use(express.static("public"));

// =======================
//       ROUTES
// =======================
app.get("/", (req, res)=> {
    res.render("homePage.ejs")
})


// =======================
//       LISTENER
// =======================
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`);
});