#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pixivImg = require('pixiv-img');

const cli = meow(`
	Usage
	  $ pixiv-img [input]

	Examples
	  $ pixiv-img https://i1.pixiv.net/img-original/img/2016/07/12/00/01/28/57862620_p0.jpg
`);

if (!cli.input[0]) {
	console.log('require input');
	process.exit(1);
}

pixivImg(cli.input[0]).catch(err => {
	console.error(err);
	process.exit(1);
});
