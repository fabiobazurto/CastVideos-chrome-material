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

# CastVideos-chrome-material

The demo can be found [here](http://googlecast.github.io/CastVideos-chrome-material/).

This sample showcases the UX compliant Chromecast polymer elements.  The main elements are:

* [cast-video](https://github.com/googlecast/cast-video-polymer) - Handles displaying and 
controlling the video
* [cast-controller-bar](https://github.com/googlecast/cast-controller-bar-polymer) - Controls the Chromecast when the local media and chromecast media don't match.

The sub elements are:
* [cast-button](https://github.com/googlecast/cast-button-polymer) - Renders cast button and handles logic related to casting
* [cast-player-bar](https://github.com/googlecast/cast-player-bar-polymer) - Renders the local video player controls and encapsulates the cast button
* [cast-volume-controller](https://github.com/googlecast/cast-volume-controller-polymer) - Used to render the volume slider for local and cast controllers.

All of the elements are tied together using `cast.CastManager` and `core-signals`.  `cast.CastManager`
represents the current state of the app.  Each element then observes the changes in castManager to
determine how it should act.  core-signals enables pubsub functionality for events such as play,
pause, seek etc.  All of the rendering is databound so changes to castManager will be reflected 
in the UI.

This sample also supports multiple casting clients connected at the same time.  Multiple users can control the casting media and have it sync between players.

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