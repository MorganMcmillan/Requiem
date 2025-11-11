const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors);
app.use(bodyParser);

// Import controller
const devController = require("./controller/devController");
const businessController = require("./controller/businessController");

app.use("/developer", devController);
app.use("/business", businessController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});