# Invidious-Scripts
Userscripts I use for Invidious

## InvidiousReplacer

This script directly replaces the video links on YouTube.com with Invidious links to the same videos, then adds your preferences onto that URL.

Similar to the InvidiousRedirect script, you can specify which instances to use in the array `urls`.

Similar to the InvidiousPrefs script, you can specify your Invidious parameters in the `myParams` array.

The script runs every 5 seconds to check for newly loaded URLs, such as those which appear after scrolling.

[>>Install<<](https://github.com/Chopper1337/Invidious-Scripts/raw/main/InvidiousReplacer.user.js)

## Individual Scripts

### InvidiousRedirect

This is a script which will automatically redirect YouTube video URLs to a random instance of Invidious as set in the script.

Edit the `urls` array, add and/or remove Invidious instances per your preference. A different instance will be picked at random from that array upon loading of the page.

Open a YouTube video in a new tab (Middle click on them is easiest), in a second or two they will be redirected to a random Invidious instance from the array.

This will not replace embedded YouTube videos.

[>>Install<<](https://github.com/Chopper1337/Invidious-Scripts/raw/main/Individual%20Scripts/InvidiousRedirect.user.js)


### InvidiousPrefs

This script automatically adds your preferred preferences for Invidious using URL parameters.

To configure, first go to the [Invidious documentation](https://github.com/iv-org/documentation/blob/master/List-of-URL-parameters.md "Invidious Docs") and find the parameters you'd like to automatically set.

Then, edit the `myParams` string in the script with these parameters.

This should work for any instance of Invidious.

[>>Install<<](https://github.com/Chopper1337/Invidious-Scripts/raw/main/Individual%20Scripts/InvidiousPrefs.user.js)

## Note

I made these scripts for my own use to temporarily work around the issue of YouTube's own website being the only place you can see all videos from everyone you're subscribed to. Unfortunately, Invidious, FreeTube, NewPipe and everything else I've tried will be missing channels, get rate limited or run into other issues.

Also note that I don't know Javascript at all.