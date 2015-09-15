# CastVideos-material

This sample showcases the Chromecast Polymer elements used together to create a media web app.  The 
cast Polymer elements showcased are:

* cast-manager - The main controller of the application, manages events, state and syncing
* cast-video - Video element
* cast-controller-bar - Element that contains the cast controller bar and queue UI.  The cast 
* controller bar allows users to control cast when the main video controls are off screen
* cast-dialog - A dialog that notifies users that cast is enabled and of the next video in queue

Since all of the rendering is databound, this sample also supports multiple clients connected at
the same time.  Multiple clients can queue and cast media.

Each of the elements can be used independently, the only requirement is the cast-manager.
The polymer elements are meant to be a simple wrapper for Chromecast, they handle the rendering
and most of the complexity.

The demo can be found [here](http://pengying.github.io/CastVideos-material/).

##Requirements

* [Bower](http://bower.io/)
* Python or a webserver

##Setup

1. Clone repo
2. `bower install`
3. `python -m SimpleHTTPServer 8080`
4. Open Chrome and navigate to localhost:8080

##Cast Browser Support
* Chrome

The elements will still work in browsers that support [Polymer](https://www.polymer-project.org/0.5/resources/compatibility.html) with out cast functionality.
* Firefox
* IE 10+
* Safari 8+