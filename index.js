const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.render("index", {
        title: "Title hahaha"
    })
});

app.listen(port, () => console.log(`Server running on port ${port}`));