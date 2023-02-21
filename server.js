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

app.get("/homePage", (req, res)=> {
    res.render("homePage.ejs")
})

app.get("/companyHistory", (req, res)=> {
    res.render("companyHistory.ejs")
})

app.get("/contactPage", (req, res)=> {
    res.render("contactPage.ejs")
})

app.get("/linksPage", (req, res)=> {
    res.render("linksPage.ejs", {
        links
    })
})

app.get("/pastWork", (req, res)=> {
    res.render("pastWork.ejs", {
        works
    })
})

app.get("/staffPage", (req, res)=> {
    res.render("staffPage.ejs", {
        staff
    })
})

// =======================
//       LISTENER
// =======================
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`);
});