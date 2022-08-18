const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not found");
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Internal Server Error")
});

app.listen(port, () => {
    console.log(`Express started on port ${port}. Press Ctrl-C to terminate.`)
});