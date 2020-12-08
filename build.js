const { execSync } = require('child_process');


copyWebsite();


function copyWebsite() {
	console.log('Building the "Trümmleige KantiTalk" website...');
	console.log(execSync('cp -v -R website/* dist/').toString());
}