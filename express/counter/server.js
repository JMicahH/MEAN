	// Load the express module
	var express = require("express");
    var session = require('express-session');
    
        // invoke var express and store resulting application in var app
        var app = express();

        // set EJS for Express views
        app.set('views', __dirname + '/views'); 
        // set EJS as view engine
        app.set('view engine', 'ejs');
        
    
        // tell our server to use the "/static" folder for static content
        app.use(express.static(__dirname + "/static"));
        app.use(session({secret: 'codingdojorocks'}));  
    
    
        // handle base route "/" and respond with "Hello Express"
        app.get('/', function(req, res) {
            
            if(!req.session.count){
                req.session.count = 0;
                console.log("SESSION COUNT RESET TO ", req.session.count);
            }

            req.session.count ++;
            console.log("SESSION COUNT INCREMENTED TO ", req.session.count);
    
            //code to add user to db goes here!
            // redirect the user back to the root route. 
            res.render('main', {session: req.session.count});
        
        })

        app.get('/plus2', function(req, res) {
            req.session.count += 1;

            res.redirect('/');
        })
        

        app.get('/reset', function(req, res) {
            req.session.count = 0;

            res.redirect('/');
        })
    
        // set express app to listen on port 8000
        // must be after all code in server.js file
        app.listen(8000, function() {
          console.log("listening on port 8000");
        })
    
    