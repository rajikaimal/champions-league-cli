const express = require("express");
const bodyParser = require("body-parser");
const getData = require("./data");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/api/v1/list", (req, res) => {
    const data = getData();
    res.json({
        status: true,
        data
    }).status(200);
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});