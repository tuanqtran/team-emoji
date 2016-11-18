// Landing page = /
// Second page = game selection /gamePage
// Third/Fourth = chosen game card game = /cardGameStartPage memory game = /guessThisEmojiPage
// /cardGame /guessGame
// Leaderboard page = /overallLeaderBoard /guessGameLeaderBoard /cardGameLeaderBoard
 
var path = require('path'),
	express = require('express'),
	router = express.Router(),
	models = require('../models');

// Enter all get/put/post here

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/games', function(req, res){
	res.sendFile(path.join(__dirname + '/../views/games/index.html'));
});


router.get('/games/memoji/landing', function(req, res){
	res.sendFile(path.join(__dirname + '/../views/memoji/index.html'));
});



router.get('/games/emojid', function(req, res){
	res.sendFile(path.join(__dirname + '/../views/emojid/new.html'));
});

router.get('/data/:model', function(req, res){
	var model = req.params.model;
	if(model == "Animals" || model == "Flags" || model == "Random"){
		models[req.params.model].findAll({
			where:
			{id:
				{$gt: 0}
			}
		})
		.then(function(data){
			res.send(data);
		})
	}else{
		res.status(500).send('Something broke!')
	}
});

router.get('/special', function(req, res){
	models.Special.findAll({
		where:
		{id:
			{$gt: 0}
		}
	})
	.then(function(data){
		res.send(data);
	})
});

module.exports = router;