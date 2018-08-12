console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
// Use npm init to generate package.json, then npm install --save to install lodash
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Toy', 1, 'Toy', 1, 2, 3])
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// var res = notes.add(9, 10);
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
// 	if(err) {
// 		console.log('Unable to write to file.')
// 	}
// });