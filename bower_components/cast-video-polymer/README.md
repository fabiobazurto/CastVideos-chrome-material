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

#cast-video
This element represents the video player in the [CastVideos-chrome-material](https://github.com/googlecast/CastVideos-chrome-material) sample.

[Demo](http://googlecast.github.io/cast-video-polymer/demo.html)

## Overview
`cast-video` observes handles mediaLoad iron events from [`cast-manager`](https://github.com/googlecast/cast-manager-polymer), then loads the video, set duration, and fires an event to notify that loading is complete.
`cast-video` also observes other iron events from `cast-manager` to play, pause, seek and change volume.  This element serves as the source of truth for media currentTime and duration during local playback.

This element supports any HTML5 video format.

It encapsulates the [cast-player-bar](https://github.com/googlecast/cast-player-bar-polymer) element to handle controlling local media and casting.

##Setup
Use [Bower](http://bower.io/) to include the cast-video in your web app.

    bower install --save googlecast/cast-volume-controller-polymer
    
##Integration
You'll need to first include [Polymer](https://www.polymer-project.org/).

###Including the element
In your html include the element.

    <link rel="import"
            href="bower_components/cast-video-polymer/cast-video.html">

Add the element to your DOM as a child of `cast-manager` and bind the required properties.

    <cast-video id="video"
                local-media="{{localMedia}}"
                volume="{{volume}}"
                current-time="{{currentTime}}"
                is-fullscreen="{{isFullscreen}}"
                cast-available="[[castAvailable]]"
                connection-status="[[connectionStatus]]"
                show-spinner="[[showSpinner]]"
                cast-device-name="[[castDeviceName]]"></cast-video>
