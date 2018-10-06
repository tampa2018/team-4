const express = require('express');
const app = express(); //an instance of express

const mysql = require('mysql');

const PORT = process.env.PORT || 8000;  //defauly port is 8k

const bodyparser = require('body-parser');

app.use(bodyparser.json());

//connect to the database
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'topsecret',
    database: 'Campaign_5',
    multipleStatements: true
});
//checks connection of mysql
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

//connecting to query
app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM Users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/ideas', (req, res) => {
    mysqlConnection.query('SELECT * FROM Ideas', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/comments', (req, res) => {
    mysqlConnection.query('SELECT * FROM Comments', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//create a listener
app.listen(8000, () => {
    console.log('Express server is runnig at port no : 3000'))
};
