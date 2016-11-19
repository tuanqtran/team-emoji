'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should();


describe('Emoji Arcade', function() {

    this.timeout(10000);

    it('should load the page', function(done) {
        // ID for the login button.

        Nightmare({
                show: true,
                waitTimeout: 5000
            })
            .goto('https://emoji-arcade.herokuapp.com/')

        .evaluate(function() {
                return document.title;
            })
            .end()
            .then(function(result) {
                result.should.equal("Emoji Arcade");
                done();
            })
            .catch(function(err) {
                console.error(err);
            })
    });


    it('should toggle the sound button', function(done) {
        // ID for the login button.

        Nightmare({ show: true })
            .goto('https://emoji-arcade.herokuapp.com/')
            .click('html body div#home.container div.inside div#header-home div.row div.col.s1.m1.l1 button.sound-toggle img.sound-icon')

        .evaluate(function() {
                return document.querySelector(".sound-icon").src;
            })
            .end()
            .then(function(result) {
                result.should.equal("https://emoji-arcade.herokuapp.com/static/images/sound-off.png");
                done();
            })
            .catch(function(err) {
                console.error(err);
            })
    });

    it('should add 2 coins to the machine', function(done) {
        // ID for the login button.

        Nightmare({ show: true })
            .goto('https://emoji-arcade.herokuapp.com/')
            .click('html body div#home.container div.inside main.home div.row.startGame div.col.s12.m4.l4 img.emojiCoin')
            .click('html body div#home.container div.inside main.home div.row.startGame div.col.s12.m4.l4 img.emojiCoin')

        .evaluate(function() {
                return document.querySelector(".emojiCredit").innerHTML;
            })
            .end()
            .then(function(result) {
                result.should.equal("Credit 2/2");
                done();
            })
            .catch(function(err) {
                console.error(err);
            })
    });

    it('should add 2 coins to the machine, then click start game, then click Memoji', function(done) {
        // ID for the login button.

        Nightmare({ show: true })
            .goto('https://emoji-arcade.herokuapp.com/')
            .click('html body div#home.container div.inside main.home div.row.startGame div.col.s12.m4.l4 img.emojiCoin')
            .click('html body div#home.container div.inside main.home div.row.startGame div.col.s12.m4.l4 img.emojiCoin')
            .click('html body div#home.container div.inside main.home div.row.startGame div#insertCoin.col.s12.m4.l4 div.pressStart a')
            .click('html body div#home.container div.inside main.home div.row div.col.s12.m12.l6.gameIcon a img.game-icon-logo')

        .evaluate(function() {
                return document.title;
            })
            .end()
            .then(function(result) {
                result.should.equal("Memoji || Emoji Arcade");
                done();
            })
            .catch(function(err) {
                console.error(err);
            })
    });
});
