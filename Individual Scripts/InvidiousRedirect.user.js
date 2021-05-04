// ==UserScript==
// @name 		Invidious Redirect
// @description	Redirects Youtube URLs to a random Invidious instance
// @namespace 	INVr
// @version 	1.1
// @run-at		document-start
// @grant 		none
// @include 	http://www.youtube.com/*
// @include 	https://www.youtube.com/*
// @include 	http://m.youtube.com/*
// @include 	https://m.youtube.com/*
// ==/UserScript==

//Your list of preferred Invidious instances
const urls = ["yewtu.be", "invidious.tube", "invidious.kavin.rocks", "invidious.048596.xyz", "vid.puffyan.us ", "ytprivate.com", "inv.skyn3t.in", "tube.incog.host", "invidious.cmh.pw", "invidious.silkky.cloud","invidious.himiko.cloud"];

//Valid random number
const random = Math.floor(Math.random() * urls.length);

var a = 0;
setInterval(function () {
	if (a === 0 && window.location.href.indexOf('watch?') > -1 && window.location.href.indexOf('list=WL') < 0) {
		a = '//' + (random, urls[random]) + '/watch?' + window.parent.location.href.split('?')[1];
		window.location.replace(a);
	}
}, 1);
