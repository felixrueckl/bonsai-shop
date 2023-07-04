// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
require("./config/session.config")(app);

// Serve the "images" folder inside "public"
app.use(express.static(__dirname + "/public/images/"));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "basic-auth";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes"); // <== already included
app.use("/", index); // <== already included

const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

const shopRouter = require("./routes/shop.routes");
app.use("/", shopRouter);

const shoppingcartRouter = require("./routes/shoppingcart.routes");
app.use("/", shoppingcartRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
