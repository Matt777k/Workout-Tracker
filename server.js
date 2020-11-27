const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3010;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.execArgv.MONGODB_URI || "mongodb://localhost/workoutTracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

//lead to api OR html routes
require("./routes/html-route")(app);
require("./routes/api-route")(app);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});