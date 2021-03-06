// ==UserScript==
// @name 		Invidious Replace
// @description Replaces Youtube URLs with a random Invidious instance
// @namespace 	InvidReplace
// @version 	1.1
// @run-at 		document-end
// @grant 		none
// @include 	http://www.youtube.com/*
// @include 	https://www.youtube.com/*
// @include   https://www.startpage.com/sp/*
// @include   https://www.startpage.com/do/dsearch?query=*
// @include   https://duckduckgo.com/?q=*
// @include   *watch?v=*
// @include 	http://m.youtube.com/*
// @include 	https://m.youtube.com/*
// ==/UserScript==

//Your list of preferred Invidious instances
const urls = ["yewtu.be", "invidious.tube", "invidious.kavin.rocks", "invidious.048596.xyz", "vid.puffyan.us ", "ytprivate.com", "tube.incog.host", "invidious.cmh.pw", "invidious.silkky.cloud", "invidious.snopyta.org", "invidious.exonip.de", "notyoutube.org", "inv.riverside.rocks"];

//Your preferred Invidious parameters here:
const myParams = '&speed=1.25&dark_mode=true&thin_mode=true&quality=hd720'
//Visit https://github.com/iv-org/documentation/blob/master/List-of-URL-parameters.md to find the list of parameters available.


//Current URL (watch? URL)
var url = window.location.href;

javascript:setInterval(function(){
  var links,thisLink;

  links = document.evaluate("//a[@href]",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  
  for (var i=0;i<links.snapshotLength;i++)
  {
    var random = Math.floor(Math.random() * urls.length);
    var thisLink = links.snapshotItem(i);
    thisLink.href = thisLink.href.replace(RegExp('www.youtube.com'),(random, urls[random]));
  }  
},1000);

//Check if URL contains "watch?" and doesn't contain "youtube"
if((url.indexOf('watch?') > 0) && (url.indexOf('youtube') < 0))
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

