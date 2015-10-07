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

#cast-controller-bar
This element represents the cast controller bar that appears when a user navigates away from the 
currently casting video and the queue UI.  By default it's pinned to the bottom of the page.

[Here](http://googlecast.github.io/CastVideos-chrome-material/) is the sample showcasing  
`cast-controller-bar`.  The repo for the sample source is [here](http://github.com/googlecast/CastVideos-chrome-material).


## Overview
`cast-controller-bar` manages both the `cast-controller-element` and `cast-queue`.  It observes 
the current state of the app and listens for iron events then shows, hides, minimizes or 
maximizes the appropriate element.  [`cast-manager`](http://github.com/googlecast/cast-manager-polymer)
 is required.  This element stays pinned to the bottom of the window.

The queue element `cast-queue` peeks when the queue is modified.  You can toggle the display mode
 with `cast-manager`'s toggleQueueElement method.  Mousing over the queue element will expand it 
 allowing you to interact with the queue.  The queue supports jumping to a specific item, deletion, 
 drag and drop reordering, changing shuffle and changing repeat mode.

The `cast-controller-element` controls casting media when the in media controls are off screen.  
`cast-controller-bar` tracks the position of the video element `bottom` and the scrolling element 
`scrollTop` then shows `cast-controller-element` when `scrollTop` > `bottom`.  From the 
controller element, you can play, pause, seek, control volume, toggle the queue and disconnect cast.

## Setup
Use [Bower](http://bower.io/) to include the cast-controller-bar in your web app.  The following 
command will add `cast-controller-bar` and it's dependencies to your project.

    bower install --save googlecast/cast-controller-bar-polymer
    
## Integration
You'll need to first include 
[Polymer](https://www.polymer-project.org/).

### Including the element
In your html include the element.

    <link rel="import"
        href="bower_components/cast-controller-bar-polymer/cast-controller-bar.html">
        
Add the element to your as a child of `cast-manager` and bind to the `cast-manager` properties.  
You'll need to pass in the id of the video element and the id of the scrolling element as 
`video-element` and `scroll-element` respectively.

    <cast-controller-bar volume="[[volume]]"
             local-media="[[localMedia]]"
             cast-available="[[castAvailable]]"
             connection-status="[[connectionStatus]]"
             has-cast-media="[[hasCastMedia]]"
             cast-device-name="[[castDeviceName]]"
             current-time="[[currentTime]]"
             video-element="video"
             scroll-element="body"></cast-controller-bar>

### Options

#### Themeing
You can quickly update the theme of your Cast Polymer elements by modifying the `cast-theme` 
element under `bower_components` in your project.

#### Position
The position can be modified by defining four CSS variables: 

* `--position-bottom` - distance from bottom of the screen
* `--position-left` - distance from the left side of the screen
* `--margin-left` - starting left margin default of 5%
* `--margin-right` - starting right margin default of 5%

If you're defining style in the main document,
 you can use the [`custom-style`](https://www.polymer-project.org/1.0/docs/devguide/styling.html#custom-style) element

Example:

    <style>
      cast-controller-bar {
        --position-bottom: 0;
        --position-left: 0;
      }
    </style>  
    
#### Maximized width
By default the maximized width is 90%.  You can update the `max-width` property to change the 
maximized width.

    <cast-controller-bar
      ...
      max-width=".7"
      ...></cast-controller-bar>

#### Disabling queue UI
If you do not want to enable the queue UI, you can set the `queue-enabled` property as false.

    <cast-controller-bar
      ...
      queue-enabled="false"
      ...></cast-controller-bar>
      