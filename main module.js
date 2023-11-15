const names = require("./4-tutorial mod1");
const sayHiHello = require("./8-utils");
const sum = require("./5-tutorial mod2");
const itemsOfList = require("./6-tutorial another");
const personPortfolio = require("./6-tutorial another");
require("./7-tutorial another way");


console.log(names);
sayHiHello("Neha")
sayHiHello(names.nameOne)
sayHiHello(names.nameTwo)
console.log(sum);
console.log(itemsOfList);
console.log(personPortfolio.name);
console.log(personPortfolio.age);
console.log(personPortfolio.job);
console.log(personPortfolio);

