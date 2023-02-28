const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();

const _ = require('lodash');

const ejs = require('ejs');

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;



app.use(express.urlencoded({extended: true}));

mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/ToDoDB", () => {
//   console.log("Connected to MongoDB");
// });

mongoose.connect("mongodb://localhost:27017/ToDoDB");


app.get('/', () => {
    console.log('hi');
})





app.set('view engine', 'ejs');

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {

    console.log("Server started on port " + port);
});

