let emailObj = require("../lib/email");
let emailConfig = require("../config/email")();
let request = require("request");
var Mailchimp = require('mailchimp-api-v3'); 
var mailchimp = new Mailchimp("d5e8f65a6a16b4c4b1be0b47f63e5bf6-us12");
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

	router.post("/subscribe", function(req, res) {
		let data = {
			"email_address": req.body.email,
		    "status": "subscribed"
		};

		mailchimp.request({
			method: 'post',
			path: "lists/a8e5dabe4a/members/",
			body: data
		}, function(error, response){
			if (error) {
				res.json({
			        Success: false,
			        Message: error.detail.split('. ')[0],
			        Status: 401
			    });
			} else if (response.statusCode == 200) {
				res.json({
			        Success: true,
			        Message: "Your are successfully subscribed!",
			        Status: 200
			    });
			} else {
				res.json({
			        Success: false,
			        Message: "Something went wrong!",
			        Status: 401
			    });
			}
		})

	});

	router.post("/contact", function(req, res) {
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

