const path = require('path');

console.log(path.sep);

// Output - \freeCodeCamp\3-Tutorial Modules\8-utils.js
const filePath = path.join('/freeCodeCamp', '3-Tutorial Modules', '8-utils.js')
console.log(filePath);
// Output - returns the name of the base file
const base = path.basename(filePath);
console.log(base);

// Output - returns the absolute path.
const absolute = path.resolve(__dirname, 'freeCodeCamp', '3-Tutorial Modules', '8-utils.js');
console.log(absolute);