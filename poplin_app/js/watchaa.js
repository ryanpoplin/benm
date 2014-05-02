'use strict';
(function() {
	const fs = require('fs');
	fs.watch('prey.txt', function() {
		// Callback is being fired twice...?
		console.log('File \'prey.txt\' has been altered...');
	});
	console.log('prey.txt is being watched for changes...');
}());