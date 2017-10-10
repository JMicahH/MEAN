// Load the express module
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// invoke var express and store resulting application in var app
var app = express();

// set EJS for Express views
app.set('views', __dirname + '/views');
// set EJS as view engine
app.set('view engine', 'ejs');

// Use native promises
mongoose.Promise = global.Promise;
// connect to the mongodb database using mongoose -- "basic_mongoose" is the name of our project's db
mongoose.connect('mongodb://localhost/chickenDashboard');

var ChickenSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    feathers: { type: String, required: true},
    clucks_given: { type: Number, required: true, min: 0 },
})
mongoose.model('Chickens', ChickenSchema); // We are setting this Schema in our Models as 'User'
var Chicken = mongoose.model('Chickens') // We are retrieving this Schema from our Models, named 'User'


// tell our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'codingdojorocks'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));


// INDEX ROUTE
app.get('/', function (req, res) {
    Chicken.find({}, function (err, chickens) {
        if (err) {
            console.log('something went wrong');
            res.redirect('/errors');
        } else {
            console.log("ALL CHICKENS:::::::", chickens);
            res.render('index', {chickens: chickens});
        }


    })
})

// ADD NEW CHICKEN PAGE
app.get("/chickens/new", function (req, res) {

    res.render('new');
});

// SINGLE CHICKEN BY ID ROUTE
app.get("/chickens/:id", function (req, res) {
    Chicken.find({
        _id: req.params.id
    }, function (err, chickens) {
        if (err) {
            console.log('something went wrong');
            res.render('index', {errors: newChicken.errors});
        } else {
            console.log("SINGLE CHICKEN:::::::", chickens);
            res.render('single', {chickens: chickens});
        }

    })
});

// EDIT SINGLE CHICKEN BY ID PAGE
app.get("/chickens/edit/:id", function (req, res) {
    Chicken.find({_id: req.params.id}, function (err, chickens) {
        if (err) {
            console.log('something went wrong');
            res.render('index', {errors: chickens.errors});
        } else {
            console.log("SINGLE CHICKEN EDIT:::::::", chickens);
            res.render('edit', {chickens: chickens});
        }

    })
});

// UPDATE SINGLE CHICKEN ROUTE
app.post("/update/:id", function (req, res) {

        // UPDATE METHOD 1
//     Chicken.update({_id: req.params.id}, {name: req.body.name, feathers: req.body.feathers, clucks_given: req.body.clucks}, function (err) {
//         if (err) {
//             console.log('something went wrong');
//             res.render('index', {errors: err});
//         } else {
//             console.log("UPDATING CHICKEN:::::::", chickens);
//             res.render('index');
//         }

//     })
// }); 

    // UPDATE METHOD 2
    
    Chicken.findOne({_id: req.params.id}, function(err, chicken){  
        console.log("CHICKEN GRABBED", chicken.name, chicken._id);
        chicken.name = req.body.name;
        chicken.feathers = req.body.feathers;
        chicken.clucks_given = req.body.clucks;

        chicken.save(function(err){
        if (err) {
            console.log('something went wrong');
            res.render('index', {errors: err});
        } else {
            console.log("SUCCESSSSSSS:::::::");
            res.redirect('/');
        } 
        })    
        });
    }); 




// ADD NEW CHICKEN TO DB
app.post('/addchicken', function (req, res) {
    var newChicken = new Chicken({
        name: req.body.name,
        feathers: req.body.feathers,
        clucks_given: req.body.clucks
    })
    console.log("ADDING NEW CHICKEN:::::::: ", newChicken);
    newChicken.save(function(err){
        if(err){
            console.log("ERRORRRRRRRRS!!!!!");
            res.render('index', {errors: newChicken.errors})
        }
        else {
            console.log("SUCCESSSSSSSSS!!!!!");
            res.redirect('/');
        }
    });

});

// DESTROY CHICKEN FROM DB
app.get('/chickens/destroy/:id', function (req, res) {

        Chicken.remove({_id: req.params.id}, function(err){
            if (err) {
                console.log('something went wrong');
                res.render('index', {errors: err});
            } else {
                console.log("DEAD CHICKEN:::::::");
                res.redirect('/');
            } 
    });
});




// set express app to listen on port 8000
// must be after all code in server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})