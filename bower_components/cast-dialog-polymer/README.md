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

# cast-dialog
The `cast-dialog` element serves as a dialog to notify the user of two things.

* The page is cast enabled
* The upcoming video if it exists in queue

A demo of the cast dialog in use can be found [here](http://googlecast.github.io/CastVideos-chrome-material/). 
Along with it's source [here](http://github.com/googlecast/CastVideos-chrome-material).

## Overview
`cast-dialog` observes [`cast-manager`](http://github.com/googlecast/cast-manager-polymer)'s castAvailable property to determine if a receiver device is available.  If
one is it automatically displays the cast_enabled dialog.

To display the preload message, set `countdownToNextMediaItem` to not null and `nextQueueMediaItem` to a `cast.Mediaitem`.

The preload message hides when a `mediaLoaded` or `hideDialog` iron event is fired.

## Setup
Use [Bower](http://bower.io/) to include the cast-dialog in your web app.  The following 
command will add `cast-dialog` and it's dependencies to your project.

    bower install --save googlecast/cast-dialog-polymer
    
## Integration
You'll need to first include 
[Polymer](https://www.polymer-project.org/).

### Including the element
In your html include the element.

    <link rel="import"
        href="bower_components/cast-dialog-polymer/cast-dialog.html">
        
### Options

#### Themeing
You can quickly update the theme of your Cast Polymer elements by modifying the `cast-theme` 
element under `bower_components` in your project.

#### Position
The position can be modified by defining four CSS variables: 

* `--position-top` - distance from top of the screen
* `--position-right` - distance from the right side of the screen

If you're defining style in the main document,
 you can use the [`custom-style`](https://www.polymer-project.org/1.0/docs/devguide/styling.html#custom-style) element

Example:

    <style>
      cast-dialog {
        --position-top: 100px;
        --position-right: 5%;
      }
    </style>  
    
