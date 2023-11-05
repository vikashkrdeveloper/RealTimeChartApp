const express = require('express');
require('dotenv').config();
const app = express();
const router = require('../routes/Router');
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECURITY));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(router);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

 

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


