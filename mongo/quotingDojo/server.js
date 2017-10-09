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
    mongoose.connect('mongodb://localhost/basic_mongoose');

    var QuoteSchema = new mongoose.Schema({
        name: String,
        quote: String,
        created_at: {type: Date, default: Date.now}
       })
       mongoose.model('Quotes', QuoteSchema); // We are setting this Schema in our Models as 'User'
       var Quote = mongoose.model('Quotes') // We are retrieving this Schema from our Models, named 'User'
    

    // tell our server to use the "/static" folder for static content
    app.use(express.static(__dirname + "/static"));
    app.use(session({secret: 'codingdojorocks'})); 
    app.use(bodyParser.urlencoded({extended: true}));


    
    app.get('/', function(req, res) {
        
        res.render('index');
    
    })        


    app.post('/addquote', function (req, res){
            console.log("POST DATA", req.body);
            
            var quote = new Quote({name: req.body.name, quote: req.body.quote});
            quote.save(function(err) {
                if(err) {
                    console.log('something went wrong');
                    res.redirect('/');                    
                  } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a quote!');
                    res.redirect('/quotes');
                  }
            });
                //code to add user to db goes here!
                // redirect the user back to the root route. 
            });            


    // handle base route "/" and respond with "Hello Express"
    app.get('/quotes', function(req, res) {
        Quote.find({}, function(err, quotes){
            if(err) {
                console.log('something went wrong');
                res.redirect('/');                    
              } else {
            console.log("ALL QUOTES:::::::", quotes);
            res.render('quotes', {quotes: quotes});                    
              }
        });
    })

    // set express app to listen on port 8000
    // must be after all code in server.js file
    app.listen(8000, function() {
      console.log("listening on port 8000");
    })
