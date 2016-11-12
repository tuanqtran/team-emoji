--------- Memory Game --------- //


Awaiting Player (Initial Display - this was my thought on what options would be there but can tweak based on our decisions)

*** ML COMMENT: This is actually a really cool idea. Since we are doing EMOJI ARCADE afterall, we could create a landing page that replicates the design of an actual 90s arcade machine.
We could have "Awaiting Player... 0/2 Coins" flashing on the screen. This might be gimicky but we could have a "coin" button on the bottom right of the page that, when clicked on, emulates the action of a player putting in coins to an actual arcade machine (with sound effects and all).
If they don't "input" any coins, the only action they could perform would be to view the leaderboards.
However, once they do fulfill the coins requirement, allow them to "Resume A Game" or start a new game by having them enter their name, pick from the games that we have available, then (maybe) theme, then difficulty, etc.

    "New Game" button - when pressed:
        Request player name 
            NOTE: Not sure if this was requested on a previous page, if so maybe store it locally in localStorage and send to the game database only when the player decides to play the game

        Request Game Difficulty - we can adjust these based on our design decisions i.e. what will fit on our page
            Ref for calculating board layouts: http://www.calculator.net/factors-calculator.html
            Easy - 16 tiles - possible boards: (2x8) (4x4)
            Medium - 36 tiles - possible boards: (2x18) (3x12) (4x9) (6x6)
            HARD - 48 tiles - possible boards: (2x24) (3x16) (4x12) (6x8)

            *** ML COMMENT: I know the number of tiles is subject to change, but (for now) a jump from 16 to 36 seems to be pretty big seeing that the difference between MEDIUM and HARD is only 12 tiles.
            Also, if we want the content of our desktop site to all fit on 1 page (no scroll bar), then we'll have to come up with 2 board layouts for each difficulty.
              - While, for example, 6*6 might work on a desktop page, displaying the same board on a mobile device might make the cards appear too small (without pinching to enlarge).

        Generate random board
            Function (front end) - factors in the chosen difficulty and generates rows
            Each row will have random lowercase letters, e.g. on easy difficulty 4x4, with 8 letters 'e i t o g p a n', {'row 1': 'eito'; 'row 2': 'oegt', 'row 3': 'gpan', 'row 4': 'napi'}
            Each letter in each row will correspond to an emoji - need to map these, e.g. 'grinning face' = 'p', 'thinking face' = 'z', etc.
            Random board rows will be sent to database and not stored locally to prevent cheating
            Keep reference to database row (like an id) stored locally so we can make calls to that row, e.g. var gameId = 4;

            *** ML COMMENT: Using lowercase letters to generate a random board is a nice solution. However, I do have a few questions.
            1. How do you make sure that each letter appears no more (and no less) than 2 times when randomizing them based on row configuration? Do you just loop through two arrays that are essentially the same (but in different orders) and attach them to however many rows are present?
            2. Will we be limited by 26 letters? Don't get me wrong, 26 different emojis is a good amount but what if we want more? Do we continue on with aa, ab, etc.?

        Generate a save game code
            Function (front end) - randomly generates 5 digit code, e.g. 'DW3V2'
        
        Save player name, game board, save game code to database (Insert into MemoryGame table with database call)

        Generate board in DOM
            Function (front end) - read code and flip card if letter is uppercased

    "Resume A Game" button - when pressed:
        Display an input for the Save Game code
        When Save Game code is entered, make database call to validate save code is valid
        Make another database call to read the associated rows, and generate the board, with cards flipped based on upper and lowercase letters

    "Scoreboard" button (or we could automatically display this once the player gets to the page, instead of displaying on command) - when pressed:
        Request scoreboards (Read Scoreboard table)
        Display scoreboards

    "Main Menu" button - when pressed:
        Route player back to Main Menu

    Play any background music or animation, whatever we decide to have

Game is Active

    Turns Counter
        Trigger Game End if Turns Counter hits zero

    Event Listener for player input
        Function (front end) - On player input, read coordinates of cards clicked and send to database

    Evaluate Player Choice
        Database read (back end) - using row and column of each card clicked from client request, return letter at coordinate
            Function (back end):
                If letters returned do not match, send response with "Incorrect"
                If letters returned do match, perform a database update and replace those letters with uppercased versions

        Database update if player choice is correct

    Display Result
        Function (front end):
            if receive "Incorrect" from server call, trigger negative highlight/sound if incorrect
            if receive "Correct" from server call, trigger positive highlight/sound if correct
        Re-hide Incorrect matches if updated database still has lowercase letters
        Retain Correct matches if uppercase letters
        Trigger Game End if all cards have been correctly matched

        *** ML COMMENT: INSERT NICE ANIMATION AND SOUND EFFECTS HERE

    Restart Turns Counter

    Player Pause
        If player tries to leave page, pop up a modal with the save game code (Database read)

        *** ML COMMENT: And also Rick-Roll them, right? No? Ok...

Game End
    
    Display "Game Over"
        If Player Win - increment # wins
        "Reset Game" button
            Generate random board and save game code
            Save player name, game board, save game code to database (MemoryGame table)
            Generate board in DOM
        "Return to Main Menu" button - route player back to Main Menu

*** ML COMMENT: One last thing (we talked about it last time) that I want to bring up -- SKULL and MILO cards.
The original idea was that we'd have a set of Skull cards and Milo cards present during all difficulties.
-- Matching a pair of Skull cards would make you lose the game immediately.
-- Matching a pair of Milo cards would award you X amount of points, add more time to your time counter, add another turn to your turn counter, or a combination of everything.
-- Whether or not we add this feature is up for debate. We'll definitely have to change how our code evaluates win and lose conditions if we add it in.
   -- The Skull condition is straightforward: the user loses immediately if two Skull cards get matched.
   -- On the other hand, the winning condition requires more thought. Does the player need to match every single card to win? If so, how can he match the Skull card and not lose? Can he also win if all cards were matched except for the Skull and Milo cards? Just some things to consider...