//Read Stream example
const fs = require('fs')
const src = fs.createReadStream('out.txt')
const dest = process.stdout

src.pipe(dest); // file to console