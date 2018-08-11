module.exports = function(app, express) {
	var router = express.Router();

	// GET routes.
	
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
	    res.render("cms/contact");
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

