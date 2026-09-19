/**
 * myhead is my version of the linux head command
 * the way to execute:
 * node myhead.js  <FILENAME>
 */
const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('Missing argument');
    console.log('Usage: node myhead.js <FILENAME>');
    process.exit(1);
}

let filename = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

for (let i = 0; i < 10 && i < lines.length; i++) {
    console.log(lines[i]);
}
