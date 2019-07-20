const sharp = require('sharp');

sharp('input.png').trim(1).toFile('output.png', function (err) {
	console.log(err);
});
