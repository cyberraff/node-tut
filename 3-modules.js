// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)
// MODULES
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade');


// sayHi('susan');
// sayHi(names.john)
// sayHi(names.peter)
// console.log(data);