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

#cast-player-bar-polymer
This element represents the player bar in a video element.  You can find an example of it used in the `cast-video` element sample or
in the [CastVideos-chrome-material](https://github.com/googlecast/CastVideos-chrome-material) sample.  It controls local and cast media depending on state. 

This element also includes the [`cast-button`](https://github.com/googlecast/cast-button-polymer) to start casting.

You can use this player bar with your own video element to easily manage playback/casting.

## Overview
`cast-player-bar` uses the [`cast-manager`](https://github.com/googlecast/cast-manager-polymer) `helper-behavior` to fire events that control play, pause, seek and volume.

You can add `cast-player-bar` to your own video element to simplify integration with [`cast-manager`](https://github.com/googlecast/cast-manager-polymer).  It leverages flexbox and will resize to fit your video size.

If you want to use a pre-existing video ement, [`cast-video`](https://googlecast/cast-video-polymer) already includes this player bar. 

##Setup
Use [Bower](http://bower.io/) to include the cast-player-bar in your web app.  The following 
command will add the `cast-player-bar` and it's dependencies to your project.

    bower install --save googlecast/cast-player-bar-polymer

##Integration
You'll need to first include [Polymer](https://www.polymer-project.org/).

###Including the element
In your html include the element

    <link rel="import"
        href="bower_components/cast-player-bar-polymer/cast-player-bar.html">

Add the element to your HTML and bind the required properties.

    <cast-player-bar id="player_bar"
                         local-media="[[localMedia]]"
                         current-time="[[currentTime]]"
                         volume="[[volume]]"
                         cast-available="[[castAvailable]]"
                         connection-status="[[connectionStatus]]"
                         queue-enabled="true"
                         is-fullscreen="[[isFullscreen]]"></cast-player-bar>