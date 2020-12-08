const fs = require('fs');

let episodeNo = fs.readdirSync('./episodes').length + 1;

// Make directory
fs.mkdirSync(`./episodes/episode${episodeNo}`);

// Layout object
var metadataObj = {
	title: 'TODO',
	description: 'TODO',
	file: "TODO: specify the file like 'track.ogg'",
	published: Date.now(),
}

// Write the the layout object
fs.writeFileSync(`./episodes/episode${episodeNo}/metadata.json`, JSON.stringify(metadataObj, null, 4));
