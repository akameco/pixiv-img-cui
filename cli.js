#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const pixivImg = require('pixiv-img');

const cli = meow(`
	Usage
	  $ pixiv-img [input]

	Examples
	  $ pixiv-img https://i1.pixiv.net/img-original/img/2016/07/12/00/01/28/57862620_p0.jpg
`);

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

const run = input =>
	pixivImg(input).then(output => {
		console.log(output);
	});

if (input) {
	run(input);
} else {
	getStdin().then(str => run(str.trim()));
}
