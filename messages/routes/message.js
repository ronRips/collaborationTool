var express = require('express');
var router = express.Router();

let Messages = require('../public/javascripts/Messages.js');
let messages = new Messages();

router.post('/', function(req, res, next) {
    const name = req.body.name;
    req.session.name = name;
    req.session.sumMessages = 0;
    res.render('messages', {name: name});

});

router.get("/",function(req, res, next) {
    if(req.session.name){
        res.render('messages', {name: req.session.name});
    }
    else res.render('index');
});


router.post('/add', function (req, res, next) {

    let message = {name:req.session.name, message:req.body.message};
    messages.add(message);
    res.status(200).send("success");
});

router.get("/add",function(req, res, next) {
    if(req.session.name){
        res.render('messages', {name: req.session.name});
    }
    else res.render('index');
});

router.get("/display",function(req, res, next) {
    let messagesToSend = messages.getFromIndex(req.session.sumMessages);
    req.session.sumMessages = messages.getSize();
    res.send(messagesToSend);
});

module.exports = router;
