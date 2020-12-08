var RSS = require('rss');

const feedGlobalOptions = {
	title: 'Trümmlige KantiTal',
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

	// Global options
	let feed = new RSS({
		...feedGlobalOptions,
		pubDate: 'May 20, 2012 04:00:00 GMT', // TODO
	});

	// Episodes
	episodesData.forEach(episode => {
		feed.item({
			...itemGlobalOptions,
			title: episode.title,
			date: episode.published,
			// categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], // optional - array of item categories
			// author: 'Guest Author', // optional - defaults to feed author property
			// description: 'use this for the content. It can include html.',
			// url: 'http://example.com/article4?this&that', // link to the item
			// enclosure: { url: '...', file: 'path-to-file' }, // optional enclosure
		})
	});

	return feed.xml();
}

module.exports = { generateFeed };