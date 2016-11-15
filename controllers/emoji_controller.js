// Landing page = /
// Second page = game selection /gamePage
// Third/Fourth = chosen game card game = /cardGameStartPage memory game = /guessThisEmojiPage
// /cardGame /guessGame
// Leaderboard page = /overallLeaderBoard /guessGameLeaderBoard /cardGameLeaderBoard
 
var express = require('express'),
	router = express.Router(),
	models = require('../models');

// Enter all get/put/post here

router.get('/', function(req, res){
	if("click on start"){
		res.redirect('/gameSelectionPage')
	}
});

router.get('/gameSelectionPage', function(req, res){
	// TODO Add data for gamePage.
	if("click on card game"){
		res.redirect('/cardGameStartPage')
	}else if("click on guess emoji game"){
		res.redirect('/guessThisEmojiPage')
	}else if("click on Leaderboard"){
		res.redirect('/overallLeaderBoard')
	}
});

router.get('/overallLeaderBoard', function(req, res){
	// TODO Requires to grab data from both the memory/card game database to display highscores.
	if("bring back to game selection page"){
		res.redirect('/gameSelectionPage')
	}
});

router.get('/cardGameStartPage', function(req, res){
	if("click on high score"){
		res.redirect('/cardGameLeaderBoard')
	}else if("click on start game"){
		res.redirect('/cardGame')
	}else if("bring back to game selection page"){
		res.redirect('/gameSelectionPage')
	}
});

router.get('/cardGame', function(req, res){
	if("click new game"){
		res.redirect('/gameSelectionPage')
	}else if("click try again"){
		res.redirect('/cardGame')
	}else if("click on high score"){
		res.redirect('/cardGameLeaderBoard')		
	}
});

router.get('/guessThisEmojiPage', function(req, res){
	if("click on high score"){
		res.redirect('/guessGameLeaderBoard')
	}else if("click on start game"){
		res.redirect('/guessGame')
	}else if("bring back to game selection page"){
		res.redirect('/gameSelectionPage')
	}
});

router.get('/guessGame', function(req, res){
	if("click new game"){
		res.redirect('/gameSelectionPage')
	}else if("click try again"){
		res.redirect('/guessGame')
	}else if("click on high score"){
		res.redirect('/guessGameLeaderBoard')		
	}
});


module.exports = router;