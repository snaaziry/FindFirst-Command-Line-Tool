/**
 * FindFirst.js is my version of combining Linux grep and head commands
 * the way to execute:
 * node FindFirst.js <PATTERN> <FILENAME> [NUMBEROFLINES]
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 5) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <PATTERN> <FILENAME> <NUMBEROFLINES>`);
    process.exit(1);
}

let filename = process.argv[3];
let pattern = process.argv[2];
let numberOfLines = Number(process.argv[4]);

let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

let count = 0;

for (let line of lines) {
    if (line.includes(pattern)) {
        console.log(line);
        count++;

        if (count >= numberOfLines) {
            break;
        }
    }
}