const express = require("express");
const server = express();

const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require('./pages');

// Nunjucks configuration
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
	express: server,
	noCache: true
});

//Configuration for static files
server
	.use(express.urlencoded({ extended: true }))
	.use(express.static("public"))
	.get("/", pageLanding)
	.get("/study", pageStudy)
	.get("/give-classes", pageGiveClasses)
	.post("/save-classes", saveClasses)
	.listen(5500);