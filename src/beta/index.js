module.exports = function(app, express) {
  var router = express.Router();
  var users = require('./controllers/usersController');
  var home = require('./controllers/homeController');
  
  router.get("/", home.index);

  return router;
}

