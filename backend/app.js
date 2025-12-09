const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Config db
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors);
app.use(bodyParser);

// Import controller
const devController = require("./controller/devController");
const businessController = require("./controller/businessController");

// Note: this application uses access and refresh JWTs.
// Both need different secrets to work
// The names of these are: JWT_ACCESS_SECRET and JWT_REFRESH_SECRET

app.use("/developer", devController);
app.use("/business", businessController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});