# Project Name

FindFirst

## Project Description

FindFirst is a simple Node.js command-line tool that combines the basic ideas of the Linux `grep` and `head` commands.

It searches a file for a word or pattern and displays only the first number of matching lines that the user requests. This is useful when a file has many matches and I only want to see the first few results.

### How to Run

Use this format:

node FindFirst.js <PATTERN> <FILENAME> <NUMBEROFLINES>

Example:

node FindFirst.js apple test.txt 2

This searches `test.txt` for the word `apple` and displays the first two matching lines.

### Commands Combined

- `grep` searches for specific text in a file.
- `head` limits the amount of output shown.
- FindFirst combines these ideas into one command.

## AI Reflection

I used AI to help me understand how `grep` and `head` work and how I could create a simple version of them using Node.js.

AI helped me understand the `fs` module, `process.argv`, loops, and how to test my program. It also helped me think of test cases and edge cases, such as searching for a word that does not exist or asking for more results than the file contains.

I still had to run the commands myself, check the results, and decide how my FindFirst command should work.

One thing AI initially missed was the location of my `FindFirst.js` file. It suggested running `node FindFirst.js`, but the file was inside the `AIWorkshop` folder. I found the correct location and used `node AIWorkshop/FindFirst.js`.

During testing, I also found that my `myhead.js` program was printing `undefined` for lines that did not exist. I corrected the loop and tested it again until it worked correctly.
