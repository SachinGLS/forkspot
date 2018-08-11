module.exports = function(app, express) {
  var router = express.Router();
  var users = require('./controllers/usersController');
  
  router.get("/", users.profile);

  return router;
}

