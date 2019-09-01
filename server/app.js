var express=require('express');
var path = require('path');
var bodyParser=require('body-parser');
var mongodb=require('mongodb');

var dbconn=mongodb.MongoClient.connect('mongodb://localhost:27017');


var app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(path.resolve(__dirname,'TAG SITE')));



app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; 
        db.collection('feedbacks').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});


app.listen(process.env.PORT|| 3000, process.eventNames.IP||'0.0.0.0');