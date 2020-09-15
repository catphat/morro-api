const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config");
//const logger = require("./log");

const isProduction = config.ENV === "production";

const app = express();

//---------------------------------------------
//Start CORS Setup
//---------------------------------------------
var allowedOrigins = ["http://localhost:3000", "https://sirfilior-dev.com"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
//End CORS Setup
//---------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---------------------------------------------
//Setup all routes
//---------------------------------------------
app.use(require("./routes"));
//---------------------------------------------

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

//---------------------------------------------
// production error handler
// no stacktraces leaked to user
//---------------------------------------------
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});
//---------------------------------------------

// Start APP
app.listen(config.PORT, () => console.log(`Listening on ${config.PORT}`));
