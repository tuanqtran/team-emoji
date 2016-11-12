$(function() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
        $('.fly-in-text2').removeClass('hidden');
        $('.fly-in-text3').removeClass('hidden');
    }, 500);
});

$(function() {
    setTimeout(function() {
        $('.startText').removeClass('hide');
        $('.emojiCredit').removeClass('hide');
        $('.emojiCoin').removeClass('hide');
        $('.mediaButton').removeClass('hide');
    }, 3000);
});

var coin = 0;

var introSong = new Audio("sounds/arcadeSong.mp4");
var coinSound = new Audio("sounds/cha-ching.wav")
	// Calls the intro song upon start of the webpage along with a eternal loop.
	introSong.play();
	introSong.loop = true;

	// Provides a pause/play function upon clicking the pause/play button.
	// Also resets the player timer to 0 upon restarting.
	$(".musicContainer").click(function(){
		if (introSong.paused === false){
			introSong.pause();
			introSong.currentTime = 0;
			$(".musicContainer").html("<img class='mediaButton' src='images/pauseButton.png' alt=''>")
		}else{
			introSong.play();
			introSong.loop = true;	
			$(".musicContainer").html("<img class='mediaButton' src='images/playButton.png' alt=''>")		
		}
	});

$(".emojiCoin").on("click", $(".emojiCoin"), function(){
	coin++
	coinSound.play();
	$(".emojiCredit").html("EMOJI CREDIT " + coin + "/2");

	if(coin == 2){
		$(".startText").html("PRESS START")
			.attr("value", "startGame");
	}
});

$(".startText").on("click", $(".startText"), function(){
	if(coin < 2){
		alert("Not enough coins.")
	}else{
		coin = coin - 2;
		console.log(coin);
		$(".emojiCredit").html("EMOJI CREDIT " + coin + "/2")	
		
		if(coin < 2){
			$(".startText").html("INSERT EMOJI COIN TO BEGIN")
				.attr("value", "");
		}
	}
})

