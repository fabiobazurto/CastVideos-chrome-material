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

This sample showcases the UX compliant Chromecast Polymer elements used together to create a media 
web app.  The cast Polymer elements showcased are:

* [cast-manager](https://github.com/googlecast/cast-manager-polymer) - The main controller of the 
application, manages events, state and syncing.  Also provides the queue, media-item objects and 
helper behavior.
* [cast-video](https://github.com/googlecast/cast-video-polymer) - Video element
* [cast-controller-bar](https://github.com/googlecast/cast-controller-bar-polymer) - Element that contains the cast controller bar and queue UI.  The cast controller bar allows users to control cast when the main video controls are off screen
* [cast-dialog](https://github.com/googlecast/cast-dialog-polymer) - A dialog that notifies users 
that cast is enabled and of the next video in queue
* [cast-theme](https://github.com/googlecast/cast-theme-polymer) - CSS theme defining variables and 
mixins. 

Since all of the rendering is databound, this sample also supports multiple clients connected at
the same time.  Multiple clients can queue and cast media.

Each of the elements can be used independently, the only requirement is the cast-manager.
The polymer elements are meant to be a simple wrapper for Chromecast, they handle the rendering
and most of the complexity.

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