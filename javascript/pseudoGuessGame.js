--- Pseudocode for Guess This Emoji ---
1. Upon page load, display a random emoji within a predefined box on the html page.
    1. The emoji that will be displayed should be randomized according to (at least) two factors: whether or not a specific theme (for example, an emoji flags theme) was chosen and the level of difficulty that was selected.
    2. The level of zoom on the emoji should be depended on the difficulty level -- the harder the difficulty, the more the image is magnified. There are at least two ways that we could develop the magnification method (both with its ups and downs).
        1. The (seemingly) easier way would be to preset where to zoom in on each emoji manually. The upside to this approach is that we'll be able to avoid having unrecognizable emojis (ones that are zoomed in on a part of the image that has no distinct features, e.g. it might just be a YELLOW background). The downside is that we'll have to perform this process manually on every emoji that we intend to have in our "emoji pool"; in other words, we won't have as many emojis to randomize from as it'll cut down the size of this pool significantly (when compared to an automated method).
        2. The harder way would be to create a system that could sort through the mountain of emojis that we currently have and manipulate them based on some logic that we'll need to build. As mentioned above, the upside to this approach is that we'll have a MUCH larger pool of emojis to pull from. However, the downside (based on how good the magnification logic is) will definitely be inconsistency. Some users might end up with a stream of unrecognizable emojis since all are zoomed in on a part of the image where no distinct features are present (again, ALL YELLOW).
        //KF COMMENT 
        Regarding the magnification method, I don't know how SVG works so this idea may not be feasible, but for #2, could we write something to randomly pick a point/coordinates in an image, detect the surrounding colors (maybe there's a library of functions that can grab hex color codes?), count the # of different colors, and then randomly pick another point if there aren't enough surrounding colors?
        Something like this looks useful (it's also on npm): http://lokeshdhakar.com/projects/color-thief/
2. Display to the user 4 emoji choices to choose from.
    *** Something to consider: we might need two arrays of emojis -- one with the "original" emojis and one with their magnified counterparts. We'll also need to link them together in order to achieve what's needed below.
    1. To state the obvious first, the list of emojis should (somehow) contain the correct emoji and 3 incorrect ones (that are also unique).
        1. One straightforward approach to make the correct emoji appear in the list of choices is to have a "1:1" relationship between the "original" array and the "magnified" array (i.e. originalArray[0] will be the original smiley-face emoji while magnifiedArray[0] will be the zoomed-in smiley-face emoji). This is good because despite having a randomized index number, we could still grab the "twin" emojis as they share the same index value. After doing this, we could easily append a manipulated emoji to the "#guessBox" portion of the page and push its original counterpart to the list of choices.
            - This approach has its downfalls. First, the "original" and "magnified" array must maintain a 1:1 relationship, meaning that it must be the same length and the "twin emojis" must be added in the same order. This is highly restrictive and lacks flexibility in situations where we might need it. Second, building upon the first point, we're assuming that there's only going to be one level of magnification, which breaks our "magnification corresponds with difficuly" concept. One "quick-fix" is to have the same number of "original" emojis stored in the array as there are "manipulated" variations of that same emoji. For example, magnifiedArray[0-2] might be the smiley-face emoji zoomed in on easy, medium and hard mode, respectively. To maintain that 1:1 relationship between the arrays, you simply make originalArray[0-2] store the original smiley-face emoji three times. This is, without a doubt, not the ideal way to do it but rather just something simple I wanted to put on the table. Nevertheless, there are surely ways to workaround this problem with database manipulation.
        2. Listing 3 unique incorrect emoji choices is a much simpler process (when ignoring what I just proposed above). In theory, we pop the correct emoji from the originalArray and loop through it, selecting 3 different original emojis in the process.
        //KF COMMENT
        For emoji display, we could possibly have magnifiedArray just be an array of objects, so that in each object we can store the multiple zoom levels, ex. ['emojiIndex0': {small: 'smallemoji.png', medium: 'mediumemoji.png', large: 'largeemoji.png'}, emojiIndex1: {small: 'smallemoji.png', medium: 'mediumemoji.png', large: 'largeemoji.png'}] etc. This way you could access at that index and then use object notation to get at the size you want.
        Question for anyone more familiar with SVG: It sounds like we would have four pictures for each emoji: the original emoji, and the small, medium, and large sizes. Would the image sizes get huge at some point?
3. Once the user clicks on an emoji choice, we evaluate whether the guess was correct or not.
    1. One way to do this is by using the "data" attribute. When appending a magnified emoji to the page, we also add a "data-emoji" attribute to it and set it to the emoji's name (e.g. data-emoji: smileyFace). The emoji's name is something that we'll have to store in the "emojiName" column of our SQL database (I originally wanted to just use the emoji's filename out of convenience but I'm unsure if "data-emoji" can be set to "smileyFace.png"). We'll repeat this process for the 4 emoji choices as well. When the user clicks on an emoji choice that has the same "data-emoji" attribute as the one that they're supposed to guess, they win the round. Alternatively, the opposite situation happens if they guess incorrectly.
    //KF COMMENT
    Looking at the files and EmojiOne github, each svg file seems to be titled using the unicode in the emoji.json file: https://github.com/Ranks/emojione/blob/master/emoji.json 
    e.g. 1f600.svg is the "grinning" emoji. We could maybe leverage this json file to help us map the files names from the SVG download to the actual emoji name.
4. The process above should continue for however many chances (or time) we decide to give them.
###### Some other things to take into consideration:
1. Ideally, once the user has guessed a certain emoji, that specific emoji should be removed from the emoji bank (NOTE: I'm not referring to the database). This prevents the user from guessing the same emoji again. However, there are 2 scenerios where this might not be needed:
    1. We successfully developed a robust magnification system (as mentioned above) and the logic will randomize where (and which distinct feature) to zoom in on so that even though it might be the same emoji, it's still "different" enough each time.
    2. We have so many emojis magnified manually (in the case that the above scenerio is not true) and, in turn, created a emoji pool large enough that the chances of a user encountering the same emoji more than one time would be low enough to ignore.
2. If we end up with the manual magnification route, we can't add a feature that allows users to upload their own emojis to our emoji bank (since we'll have to manually create magnified versions of the emojis that they uploaded in order for the game to work).
3. Building upon point #2, we'll have to manually magnify the same emoji three separate times (or even more if we decide to add more difficulty levels), which can be extremely time-consuming.
    //KF COMMENT
    Yeah, it'd be nice to have a solution that dynamically generates the zoomed-in emoji. Not sure how to solve this yet, but we could research it.
4. It would be nice to have a nice 80s/90s "arcadey" song playing in the background. Besides nice animations, nice sound effects when clicking on different stuff would definitely add to the overall user experience.
###### TLDR and basic logic flow of the game:
1. The user arrives to our beautifully-designed EMOJI ARCADE landing page and decides to take GUESS THAT EMOJI for a twirl.
2. The user is prompted to enter their name, pick a specific theme (FLAGS, FOOD, RANDOM, etc.), and select between three difficulties (EASY, MEDIUM, HARD).
3. The user is then given a set amount of guesses or time or a combination of both to GUESS THAT EMOJI, which could change depending on the difficulty that was selected.
2. An emoji, which needs to be magnified on a distinct point (NOT JUST ALL YELLOW) will appear on the screen; the clock starts ticking.
4. The user clicks on 1 of 4 emoji choices.
5. If the emojis matched, their score increases by whatever amount of points (could change depending on difficulty) and they move onto the next one. If the emojis didn't match, their number of guesses goes down and they move onto the next one. In both cases, they are shown the correct emoji and a message before moving onto the next round.
6. This process continues until they run out of guesses or the time is up.
7. Their final score will be logged to our database and will be viewable on the leaderboard section of our page. How the score will be calculated can be discussed later.
8. The user will be presented with their final score, the option to view the leaderboards, go for another round, or try out another game.
9. If they try to exit out of the page, we will find a way to disallow that from happening and Rick-Roll them; a new Rick-Roll window will pop-up everytime they click on the "close" button on their browser. (JKing... kinda.)
    //KF COMMENT
    Is it 2008 again?