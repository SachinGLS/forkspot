let emailObj = require("../lib/email");
let emailConfig = require("../config/email")();
module.exports = function(app, express) {
	var router = express.Router();

	router.get("/", function(req, res) {
	    res.render("cms/index");
	});

	router.get("/index", function(req, res) {
	    res.redirect("/");
	});

	router.get("/about", function(req, res) {
	    res.render("cms/about");
	});

	router.get("/contact", function(req, res) {
		var data = {msg:''};
		if (req.query.sent) {
			data.msg = emailConfig.contactSuccessMsg;
		}
	    res.render("cms/contact", data);
	});

	router.post("/contact", function(req, res) {
		let data = [];
		var body = '';
		console.log(emailConfig);
        data.email = emailConfig.contactEmail;
        body = emailConfig.contactEmailMessage;
        body = body.replace('{name}', req.body.name);
        body = body.replace('{email}', req.body.email);
        body = body.replace('{message}', req.body.message);
        data.emailMessage = body;
        data.subject = emailConfig.contactSubject;
        emailObj.sendEmail(data);
	    res.redirect("contact?sent=1");
	});

	router.get("/app-landing", function(req, res) {
	    res.render("cms/app-landing");
	});
	
	router.get("/news", function(req, res) {
	    res.render("cms/news");
	});

	router.get("/comingsoon", function(req, res) {
	    res.render("cms/comingsoon");
	});

	router.get("/faq", function(req, res) {
	    res.render("cms/faq");
	});

	router.get("/mobile", function(req, res) {
	    res.render("cms/mobile");
	});

	router.get("/placeorder", function(req, res) {
	    res.render("cms/placehoder");
	});
	
	router.get("/track-order", function(req, res) {
	    res.render("cms/track-order");
	});

	return router;
}

