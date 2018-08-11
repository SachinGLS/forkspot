/**
 * Include dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
 * Load environment variables from .env file.
 */
dotenv.load({ path: '.env.example' });

/**
 * Create Express server.
 */
const app = express();

/**
 * Route handlers
 */
const cmsController = require('./src/cms')(app, express);

/**
 * Express configuration.
 */
app.set('host', process.env.DEV_IP || '0.0.0.0');
app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressStatusMonitor());
app.use(compression());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable('x-powered-by');

app.use('/', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * App routes.
 */
app.use("/", cmsController);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Stop by pressing CTRL+C\n');
});

module.exports = app;
