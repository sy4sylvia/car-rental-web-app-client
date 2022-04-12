const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//database setup

//CRUD
// app.route("/")
//     .get(function (req, res) {
//
//     })
//     .post(function (req, res) {
//
//     });
//nothing to delete from homepage


app.listen(3000, function() {
    console.log("Server started on localhost 3000");
})