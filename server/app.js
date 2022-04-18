const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql2");

//CURRENTLY, NOT USED.

//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


//database setup
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'WOW'
});

connection.connect(function (err){
    if (err) console.log(err);
});

// simple query
connection.query('SELECT * FROM `sjd_order` WHERE `end_odometer` > 1000', (err, results, fields) => {
    if (err) console.log(err);
    else {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
})

// with placeholder
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function(err, results) {
//         if (err) console.log(err);
//         else console.log(results);
//     }
// );


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
});

connection.end();