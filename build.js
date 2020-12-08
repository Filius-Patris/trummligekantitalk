const { execSync } = require('child_process');
const fs = require('fs');
const feedGenerator = require('./feedGenerator');

copyWebsite();
let episodes = getEpisodeDetails();


function copyWebsite() {
	console.log('Building the "Trümmlige KantiTalk" website...');
	console.log(execSync('cp -v -R website/* dist/').toString());
}

function getEpisodeDetails() {
	console.log('Retrieving episode details...');

	let episodesDir = fs.readdirSync('./episodes');
	let episodes = episodesDir.map(dir => {

		let metadataRaw = fs.readFileSync(`./episodes/${dir}/metadata.json`);
		// Check that we don't publish TODO episodes
		if (metadataRaw.includes('TODO')) throw new Error(`Episode ${dir} has TODO entries. Aborting.`);

		let metadata = JSON.parse(metadataRaw);
		// Check that we have an appropriae length
		if (metadata.length === 0) throw new Error(`Episode ${dir} has a length of zero. Aborting.`);

		// Attach dirname for later use...
		metadata.dirName = dir;

		return metadata;
	});

	console.log({ episodes });
}