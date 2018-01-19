// (function (exports, require, module, __filename, __dirname) {

// console.log(exports);

var shellfish = require('./shelfish');
var pet = require('./pet');

var leftPad = require('left-pad');


console.log(shellfish);

console.log(shellfish("lobsters"));
console.log(shellfish("shrimp"));
console.log(shellfish("chicken"));

console.log(pet.fishName("frank"));
var name = pet.fishName("frank");
console.log(name);
console.log(pet.isGoldpet("frank"));

console.log(leftPad(name, 25, "🤗"));


// })();

