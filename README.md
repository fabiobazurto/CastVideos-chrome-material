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

This sample showcases the UX compliant Chromecast polymer elements and the process for productionizing them.

The main elements are:

* [cast-manager](https://github.com/googlecast/cast-manager-polymer) - Controller for Cast 
Polymer element.  Exposes properties that manage state, handles events and rotes them to 
subscribed elements.
* [cast-video](https://github.com/googlecast/cast-video-polymer) - Handles displaying and 
controlling the video
* [cast-controller-bar](https://github.com/googlecast/cast-controller-bar-polymer) - Controls the
 Chromecast when the video controls aren't on screen.  Also displays the queue UI.
* [cast-dialog](https://github.com/googlecast/cast-dialog-polymer) - Notifies users that the page
 is cast enabled.  Also handles the upcoming video notification and count down.
 
All of the rendering is databound so changes to castManager will be reflected 
in the UI.

This sample also supports multiple casting clients connected at the same time.  Multiple users can control the casting media and have it sync between players.

Each of the elements can be used independently, the only requirement is the cast-manager.
The polymer elements are meant to be a simple wrapper for Chromecast, they handle the rendering
and most of the complexity.

The demo can be found [here](http://googlecast.github.io/CastVideos-material-chrome/).

## Productionising

The sample builds off [polymer-starter-kit](https://github.com/PolymerElements/polymer-starter-kit/).
Productionising will minify CSS and HTML, uglifiy javascript and merge all of the elements into a single HTML file.

To productionise your app run:
    
    gulp
    
The compiled files will be in the dist directory.

## Requirements

* [Node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)

## Setup

1. Clone repo
2. `npm install`
3. `bower install`
4. `gulp serve:dist`
5. Navigate your browser to localhost:5000

## Cast Browser Support
* Chrome

The elements will still work in browsers that support [Polymer](https://www.polymer-project.org/1.0/resources/compatibility.html) with out cast functionality.
* Firefox
* IE 10+
* Safari 8+
* 

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/) and the [Google Cast SDK Additional Developer Terms of Service](https://developers.google.com/cast/docs/terms/).
