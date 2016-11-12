--------- Memory Game --------- //


Awaiting Player (Initial Display - this was my thought on what options would be there but can tweak based on our decisions)

    "New Game" button - when pressed:
        Request player name 
            NOTE: Not sure if this was requested on a previous page, if so maybe store it locally in localStorage and send to the game database only when the player decides to play the game

        Request Game Difficulty - we can adjust these based on our design decisions i.e. what will fit on our page
            Ref for calculating board layouts: http://www.calculator.net/factors-calculator.html
            Easy - 16 tiles - possible boards: (2x8) (4x4)
            Medium - 36 tiles - possible boards: (2x18) (3x12) (4x9) (6x6)
            HARD - 48 tiles - possible boards: (2x24) (3x16) (4x12) (6x8)

        Generate random board
            Function (front end) - factors in the chosen difficulty and generates rows
            Each row will have random lowercase letters, e.g. on easy difficulty 4x4, with 8 letters 'e i t o g p a n', {'row 1': 'eito'; 'row 2': 'oegt', 'row 3': 'gpan', 'row 4': 'napi'}
            Each letter in each row will correspond to an emoji - need to map these, e.g. 'grinning face' = 'p', 'thinking face' = 'z', etc.
            Random board rows will be sent to database and not stored locally to prevent cheating
            Keep reference to database row (like an id) stored locally so we can make calls to that row, e.g. var gameId = 4;

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

    Restart Turns Counter

    Player Pause
        If player tries to leave page, pop up a modal with the save game code (Database read)

Game End
    
    Display "Game Over"
        If Player Win - increment # wins
        "Reset Game" button
            Generate random board and save game code
            Save player name, game board, save game code to database (MemoryGame table)
            Generate board in DOM
        "Return to Main Menu" button - route player back to Main Menu