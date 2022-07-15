const mysql = require("mysql");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stack-overflow'
});

let sql = `CREATE TABLE User(
    id int AUTO_INCREMENT, 
    name varchar(255) NOT NULL,
    password varchar(255),
    type varchar(255) NOT NULL,
    PRIMARY KEY(id)
    )`;
db.query(sql, (err, result) => {
    if (err)
        console.log("Unable to create User table...");
    else
        console.log("User table created successfully...");
});

let sql1 = `CREATE TABLE Question(
    id int AUTO_INCREMENT, 
    question varchar(255) NOT NULL,
    user varchar(255),
    created_on DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(user) REFERENCE User
    )`;
db.query(sql1, (err, result) => {
    if (err)
        console.log("Unable to create User table...");
    else
        console.log("User table created successfully...");
});


const createMySqlConnection = () => {
    db.connect((err) => {
        if (err) throw err;
        console.log("Connected to database...");
    });
}
