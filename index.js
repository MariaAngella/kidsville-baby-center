/* require is a keyword used to use a package and below are the packages */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // requring the file system
const mongodb = require("mongodb");
const session = require("express-session");
const expressValidator = require("express-validator");
const imageVars = require("broccoli-sass-image-vars");



const app = express(); // now we have our express app

/* mongoose db connection */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/babycenter");





app.use(express.static(path.join(__dirname,'public')));




// middleware
app.set("view engine", "pug"); //setting the view engine as pug
app.set("views", path.join(__dirname, "views")); //there's a folder called views and this is how to get it
app.use(bodyParser.urlencoded({ extended: true })); //for geting the posted data from the form in the console/body and the output is json
app.use(bodyParser.json());
// app.use(expressValidator());
//express-session for tracking user's activity    or tracking logins
app.use(
  session({
    secret: "thesecret",
    resave: true,
    saveUninitialized: false
  })
);



//import routes
const landingpageRoute = require("./routes/landingpageroute");
app.use("/", landingpageRoute);



const supervisorlogoutRoute = require("./routes/supervisorlogoutroute");
app.use("/supervisorlogout", supervisorlogoutRoute);

const parentlogoutRoute = require("./routes/parentlogoutroute");
app.use("/parentlogout", parentlogoutRoute);

const sitterlogoutRoute = require("./routes/sitterlogoutroute");
app.use("/sitterlogout", sitterlogoutRoute);

const officiallogoutRoute = require("./routes/officiallogoutroute");
app.use("/officiallogout", officiallogoutRoute);

const supervisorregistrationRoute = require("./routes/supervisorregistrationroute");
app.use("/supervisorregistration", supervisorregistrationRoute);

const supervisorloginRoute = require("./routes/supervisorloginroute");
app.use("/supervisorlogin", supervisorloginRoute);

const supervisordashboardRoute = require("./routes/supervisordashboardroute");
app.use("/supervisordashboard", supervisordashboardRoute);

const officialregistrationRoute = require("./routes/officialregistrationroute");
app.use("/officialregistration", officialregistrationRoute);

const officialloginRoute = require("./routes/officialloginroute");
app.use("/officiallogin", officialloginRoute);

const officialdashboardRoute = require("./routes/officialdashboardroute");
app.use("/officialdashboard", officialdashboardRoute);

const ParentregistrationRoute = require("./routes/parentregistrationroute");
app.use("/parentregistration", ParentregistrationRoute);

const ParentloginRoute = require("./routes/parentloginroute");
app.use("/parentlogin", ParentloginRoute);

const ParentdashboardRoute = require("./routes/parentdashboardroute");
app.use("/parentdashboard", ParentdashboardRoute);

const SitterregistrationRoute = require("./routes/sitterregistrationroute");
app.use("/sitterregistration", SitterregistrationRoute);

const SitterloginRoute = require("./routes/sitterloginroute");
app.use("/sitterlogin", SitterloginRoute);

const SitterdashboardRoute = require("./routes/sitterdashboardroute");
app.use("/sitterdashboard", SitterdashboardRoute);

const SitterdashboarddbRoute = require("./routes/sitterregistrationdbroute");
app.use("/sitterdashboarddb", SitterdashboarddbRoute);

/* creates documents in the db------------------------------------- name of the collection model(collection storage,schemaStructure)....takes on the structure of schema and the req.body(user data) into the Register collection */


/* listening for requests: the server */
app.listen(4400, function() {
  console.log("Express listening  on 4400");
});
