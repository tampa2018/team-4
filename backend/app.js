const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


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


app.post('/users', (req, res, next) => {
    mysqlConnection.query("insert into Users (uid,fname,lname,password,email) values ('+ req.body.uid +' , ' + req.body.fname +', '+ req.body.lname +', '+ req.body.password +', '+ req.body.email +')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.post('/ideas', (req, res, next) => {
    mysqlConnection.query("insert into Ideas (iid,title,body,trend_count,date, off_flag, deletion, anonymous) values ('+ req.body.iid +' , ' + req.body.title +', '+ req.body.body +', '+ req.body.tren_count +', '+ req.body.date +' , '+ req.body.off_flag +', '+ req.body.deletion +', '+ req.body.anonymous +')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.post('/comments', (req, res, next) => {
    mysqlConnection.query("insert into Comments (cid,title,body,trend_count,date, off_flag, deletion, anonymous) values ('+ req.body.iid +' , ' + req.body.title +', '+ req.body.body +', '+ req.body.tren_count +', '+ req.body.date +' , '+ req.body.off_flag +', '+ req.body.deletion +', '+ req.body.anonymous +')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));
