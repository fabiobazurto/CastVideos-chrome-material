Copyright 2014 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

# CastVideos-material

The demo can be found [here](http://googlecast.github.io/CastVideos-material/).

This sample showcases the Chromecast polymer elements.  The main elements are:

*cast-video - Handles displaying and controlling the video
*video-carousel - Carousel displaying video options
*video-details - Displays the details of current local video
*cast-controller-bar - Controls the Chromecast when the local media and chromecast media
don't match.

All of the elements are tied together using cast.CastManager and core-signals.  cast.CastManager
represents the current state of the app.  Each element then observes the changes in castManager to
determine how it should act.  core-signals enables pubsub functionality for events such as play,
pause, seek etc.

Since all of the rendering is databound, this sample also supports multiple clients connected at
the same time.  Multiple clients can cast and control media.

Each of the elements can be used independently, the only requirement is the chromecast-button.
The Polymer elements are meant to be a simple wrapper for Chromecast API.  Instead of  they handle
the rendering
and most of the complexity.

##Requirements

[Bower](http://bower.io/)
Python or a webserver

##Setup

1. Clone repo
2. `bower update`
3. `python -m SimpleHTTPServer 8080`
4. Open Chrome and navigate to localhost:8080

##Cast Browser Support
* Chrome

The elements will still work in browsers that support [Polymer](https://www.polymer-project.org/0.5/resources/compatibility.html) with out cast functionality.
* Firefox
* IE 10+
* Safari 8+
