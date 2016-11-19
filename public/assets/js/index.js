



var coin = 0;

var introSong = new Audio("/static/sounds/arcadeSong.mp3");
var coinSound = new Audio("/static/sounds/cha-ching.wav")
	// Calls the intro song upon start of the webpage along with a eternal loop.
	introSong.play();
	introSong.loop = true;

	// Provides a pause/play function upon clicking the pause/play button.
	// Also resets the player timer to 0 upon restarting.
	$(".sound-toggle").click(function(){
		console.log('Sound Button')
		if ($(this).attr('value') === 'on'){
			introSong.pause();
			$('.sound-toggle').attr('value', 'off');
			$('.sound-icon').attr('src', '/static/images/sound-off.png');
		}else{
			introSong.play();
			introSong.loop = true;	
			$('.sound-toggle').attr('value', 'on');
			$('.sound-icon').attr('src', '/static/images/sound-on.png');		
		}
	});

$(".emojiCoin").on("click", $(".emojiCoin"), function(){
	coin++
	coinSound.play();
	$(".emojiCredit").html("Credit " + coin + "/2");

	if(coin == 2){
		$(".startText").html("<a href='/games'>Start Game</a>")
		.attr("class", "pressStart")
			.attr("value", "startGame");
	}
});

$(".startText").on("click", $(".startText"), function(){
	if(coin < 2){
		alert("Not enough coins.")
	}else{
		coin = coin - 2;
		console.log(coin);
		$(".emojiCredit").html("Credit " + coin + "/2")	
		
		if(coin < 2){
			$(".startText").html("Insert Coin(s)")
				.attr("value", "");
		}
	}
})



