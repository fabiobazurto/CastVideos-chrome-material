# CastVideos-material

This sample showcases the Chromecast polymer elements.  The main elements are:

chromecast-video - Handles displaying and controlling the video
video-carousel - Carousel displaying video options
video-details - Displays the details of current local video
chromecast-controller-bar - Controls the Chromecast queue

All of the elements are tied together using cast.MediaStatus and core-signals.  cast.mediaStatus
represents the current state of the app.  Each element then observes the changes in mediaStatus to
determine how it should act.  core-signals enables pubsub functionality for events such as play,
pause, seek, queue, etc.

Since all of the rendering is databound, this sample also supports multiple clients connected at
the same time.  Multiple clients can queue and cast media.

Each of the elements can be used independently, the only requirement is the chromecast-button.
The polymer elements are meant to be a simple wrapper for Chromecast, they handle the rendering
and most of the complexity.

The demo can be found [here](http://pengying.github.io/CastVideos-material/).

##Setup


##Browser Support
* Chrome
* Firefox
* IE 10+
* Safari 8+
