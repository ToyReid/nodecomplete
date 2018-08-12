console.log('Starting notes.js')

// console.log(module);
// Using arrow function, acts as 'function () {}'
module.exports.addNote = () => {
	console.log('addNotes');
	return 'New note';
}

module.exports.add = (a, b) => {
	return a + b;
}