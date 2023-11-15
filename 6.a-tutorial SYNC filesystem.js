const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./onefile.txt', 'utf-8');
const second = readFileSync('./twofile.txt', 'utf-8');

// Creates a new file if the file is not existing and overrides the previous content if file exists.
writeFileSync(
    './result.txt', "Hello this file has been written using node"
);

writeFileSync(
    './result.txt',
    ` here is a result : ${first} and ${second}. i am trying to append the new sentence to my file without overriding.`,
    { flag : 'a' },
);


console.log(first, second);