var RSS = require('rss');

const baseURL = 'https://tkt.filiuspatris.net/'

const feedGlobalOptions = {
	title: 'Trümmlige KantiTalk',
	description: 'TODO', // TODO
	feed_url: 'http://tkt.filiuspatris.net/rss.xml',
	site_url: 'http://tkt.filiuspatris.net',
	image_url: 'http://example.com/icon.png', // TODO
	docs: 'https://www.rssboard.org/rss-specification',
	managingEditor: 'Joel & Alina',
	webMaster: 'filiuspatrisapps@gmail.com ("FiliusPatris")',
	copyright: '© 2020 Joel Zumstein, Alina Holst',
	language: 'de-CH',
	categories: ['Comedy'],
};

const itemGlobalOptions = {
	lat: 47.47040, // Kanti Baden
	long: 8.31368,
};


function generateFeed(episodesData) {
	console.log('Generating feed...');

	let lastDate = Math.max.apply(null, episodesData.map(episode => episode.published));
	console.log({ lastDate });

	// Global options
	let feed = new RSS({
		...feedGlobalOptions,
		pubDate: new Date(lastDate),
	});

	// Episodes
	episodesData.forEach(episode => {
		feed.item({
			...itemGlobalOptions,
			title: episode.title,
			date: episode.published,
			description: episode.description,
			author: episode.author,
			categories: episode.categories,
			url: baseURL + episode.dirName,
			// enclosure: { url: '...', file: 'path-to-file' }, // optional enclosure
		})
	});

	return feed.xml();
}

module.exports = { generateFeed };