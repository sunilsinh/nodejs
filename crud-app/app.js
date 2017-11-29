/* Added express module to create template file */
var express = require('express');

/* created express as object */
var app = new express();

/* router using express*/

var router = express.Router();
/* set view engine as template folder now we are using view
 We will add template with extension .ejs */
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

/* added body parser for request parameter */
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Add module mongodb
var mongodb = require('mongodb');

// Add assert module
var assert = require('assert');

// connect mondodb url 

var url = 'mongodb:localhost:27017/test';// port 27017 database test

// request from URL
app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', urlencodedParser, function (req, res) {
    var item = {
        emailId: req.body.email,
        password: req.body.password
    };

    // insert data in mongodb
    mongodb.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });

    });
    res.render('success');
});

/* get data using router*/

router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongodb.connect('url', function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);

        },
            function () {
                db.close();
                res.render('/');
            }
        );
    });
});

/* insert data */
router.post('insert-data', function (req, res, next) {

});

/* update data */
router.post('update-data', function (req, res, next) {

});
/* delete data */
router.post('delete-data', function (req, res, next) {

});

// Create server
app.listen(5555);
console.log("Crud application is running on 5555");