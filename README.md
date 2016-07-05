#mock up for crossword ui

## Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run development build. If it doesn't start, make sure you aren't running anything else in the same port. In case you are on a Unix platform, you can try `PORT=3000 npm start`. It will pick up the port from the environment if it's set.
3. Surf to the port shown at terminal.
4. Start modifying the code. The browser should pick up the changes.

##Intial spec writeup
1) UI
- open with a menu that shows some options and a 'make puzzle' button
- make puzzle promps the user to enter some words

![Alt text](/readmestuff/word_query.png?raw=true "word prompt mockup")

- this could hit googles list API to fill in other related words

        green button would this 
- ask user to pick a puzzle layout, something like: http://www.onlinecrosswords.net/layout-730.png
    
        in progress
- 'go' button
- some display of the algorithm's progress as words are added