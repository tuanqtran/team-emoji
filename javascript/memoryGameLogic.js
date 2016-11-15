var easyArrayTiles = [], // 24 tiles
	mediumArrayTiles = [], // 36 tiles.
	hardArrayTiles = []; // 48 tiles.

// Select difficulty
switch(difficulty) {
    case "easy":
        // TODO
        break;
    case "medium":
        // TODO
        break;
    case "hard":
        // TODO
        break;
    default:
        console.log("Difficulty not selected."); 
};

// Skull Milo Card 
// Skull card = 1 if flipped. Punishes them by randomizing the board
// Skull card when both cards are displayed you lose.
// Milo card = 1 if flipped. Rewards them by flipping all cards for 1 second.
// Milo card gives a bonus.
// A and B will be the skull/milo cards. Does not required to be filed to win/lose.

// Randomize the emoji cards in the table tiles.
var initialTest = ["a", "b", "c", "d"];
var skullMilo = ["skull", "milo"];
var actualCards = []; 

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
for(i=0; i<initialTest.length; i++){
	actualCards.push(initialTest[i], initialTest[i]);
}

for(i=0; i<skullMilo.length; i++){
	actualCards.push(skullMilo[i]);
}

console.log(actualCards);
shuffleArray(actualCards);
console.log(actualCards);


// <div class="col s12">
// 	<div class="col s2">push info here</div>
// 	<div class="col s2">push info here</div>
// 	<div class="col s2">push info here</div>
// 	<div class="col s2">push info here</div>
// 	<div class="col s2">push info here</div>
// </div>