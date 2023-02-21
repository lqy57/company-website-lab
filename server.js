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
    for (let link of links) {
		let splitName = link.title.split(' ');
		for (let i = 0; i < splitName.length; i++) {
			let splitWord = splitName[i].split('');
			splitWord[0] = splitWord[0].toUpperCase();
			splitName[i] = splitWord.join('');
		}
		link.title = splitName.join(' ');
	}
    res.render("linksPage.ejs", {
        links: links
    })
})

app.get("/pastWork", (req, res)=> {
    for (let work of works) {
		let splitName = work.title.split(' ');
		for (let i = 0; i < splitName.length; i++) {
			let splitWord = splitName[i].split('');
			splitWord[0] = splitWord[0].toUpperCase();
			splitName[i] = splitWord.join('');
		}
		work.title = splitName.join(' ');
	}
    res.render("pastWork.ejs", {
        works: works
    })
})

app.get("/staffPage", (req, res)=> {
    for (let worker of staff) {
		let splitName = worker.title.split(' ');
		for (let i = 0; i < splitName.length; i++) {
			let splitWord = splitName[i].split('');
			splitWord[0] = splitWord[0].toUpperCase();
			splitName[i] = splitWord.join('');
		}
		worker.title = splitName.join(' ');
	}
    res.render("staffPage.ejs", {
        staff: staff
    })
})

// =======================
//       LISTENER
// =======================
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`);
});