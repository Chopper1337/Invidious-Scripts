// ==UserScript==
// @name        Invidious Prefs
// @description Load preferences from URL parameters on any instance on Invidious
// @namespace   INVp
// @version     1.0
// @run-at 		document-start
// @grant       none
// @include     *watch?v=*
// @exclude     https://www.youtube.com/*
// ==/UserScript==

//Visit https://github.com/iv-org/documentation/blob/master/List-of-URL-parameters.md to find the list of parameters available.

//Put your preferred parameters here:
const myParams = '&speed=1.25&dark_mode=true&thin_mode=true&quality=dash'

//Current URL (YouTube watch? URL)
var url = window.location.href;

//Check if this is defintely a video URL
if(url.indexOf('watch') > 0)
{
	if (url.indexOf(myParams) > -1) //Check if your parameters are already present in the URL
  {
   url += '' //Do nothing, have this here for the case that I decide to add something
	}
	else //Else this URL is valid and needs your parameters set
  {
    url += myParams //&continue=0&local=true&raw=0&quality=hd720
    window.location.href = url; //Load new URL
	}
}
