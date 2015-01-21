/**
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
*/

var cast = window.cast || {};

/**
 * CastManager is used as the glue for all of polymer elements.  It stores the current state
 * of the app and has some utility functions.
 *
 * It leverages core signals for to fire pubsub events.  Also many elements observe
 * it's elements.
 */
(function () {
  'use strict';
  //load core signal if it isn't already included for pubsub events
  var loadCoreSignal = function () {
    var coreSignalImport = document.createElement('link');
    coreSignalImport.setAttribute('rel', 'import');
    coreSignalImport.setAttribute('href', 'bower_components/core-signals/core-signals.html');
    document.body.appendChild(coreSignalImport);
  };

  if (document.readyState === "complete") {
    loadCoreSignal();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      loadCoreSignal();
    });
  }

  /**
   * Defines the sender of the request
   *
   * @type {{LOCAL: number, CHROMECAST: number}}
   */
  CastManager.SENDER = {
    'LOCAL': 0, //local video
    'CHROMECAST': 1, //chromecast events ie. for multiple senders
    'CASTCONTROLLER': 2 //cast controller bar
  };

  /**
   * Class to glue together video player UI
   *
   * @param media {cast.Media} initial media
   * @constructor
   */
  function CastManager(media) {

    /**
     * Local media object reference
     *
     * @type {cast.Media}
     */
    this.localMedia = media;

    /**
     * Chromecast media object reference
     *
     * @type {chrome.cast.media.Media}
     */
    this.castMedia = {};

    /**
     * Chromecast session object reference
     *
     * @type {chrome.cast.Session}
     */
    this.session = {};

    /**
     * Tracks whether cast is connected
     * @type {boolean}
     */
    this.isCasting = false;

    this.showSpinner = false;
  }

  CastManager.prototype = {
    /**
     * Fire a play core signals event
     *
     * @param sender {CastManager.SENDER}
     */
    play: function (sender) {
      var playEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'play',
                'sender': sender
              }
            }
          });
      document.dispatchEvent(playEvent);
    },
    /**
     * Fire a pause core signals event
     *
     * @param sender {CastManager.SENDER}
     */
    pause: function (sender) {
      var pauseEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'pause',
                'sender': sender
              }
            }
          });
      document.dispatchEvent(pauseEvent);
    },
    /**
     * Fire a seek core signals event
     *
     * @param time {number} time in seconds to seek to
     * @param sender {CastManager.SENDER}
     */
    seek: function (time, sender) {
      //Fire a core-signal event
      var seekEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'seek',
                'currentTime': time,
                'sender': sender
              }
            }
          });
      document.dispatchEvent(seekEvent);
    },
    volume: function (sender, volume) {
      var volumeEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'volume',
                'volume': volume,
                'sender': sender
              }
            }
          });
      document.dispatchEvent(volumeEvent);
    },
    fullScreen: function () {
      var fullscreenEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'fullscreen'
              }
            }
          });
      document.dispatchEvent(fullscreenEvent);
    },
    exitFullScreen: function () {
      var fullscreenEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'media-action',
              'data': {
                'action': 'exitFullscreen'
              }
            }
          });
      document.dispatchEvent(fullscreenEvent);
    },
    /**
     * Stores a reference to the cast media element
     *
     * @param media
     */
    setCastMedia: function (media) {
      this.castMedia = media;
    },
    /**
     * Sets the local media
     *
     * @param media
     */
    setLocalMedia: function (media) {
      this.localMedia = media;
      this.localMedia.state = cast.Media.STATE.PAUSE;
      // Let the main player bar control everything
      if (this.isMediaMatch()
          && this.hasCastMedia()) {
        // Add a delay to allow video element to load the video through observers
        window.setTimeout(function () {
          if (this.castMedia.currentTime != 0) {
            this.seek(this.castMedia.currentTime, CastManager.SENDER.CHROMECAST);
          }
          if (this.castMedia.playerState == chrome.cast.media.PlayerState.PLAYING) {
            this.play(CastManager.SENDER.CHROMECAST);
          }
        }.bind(this), 500);
      }
    },
    /**
     * Returns true if castMedia is not an empty object and
     * if the cast player state isn't idle.
     *
     * @returns {boolean}
     */
    hasCastMedia: function () {
      return (Object.keys(this.castMedia).length > 0
      && this.castMedia.playerState !== chrome.cast.media.PlayerState.IDLE);
    },
    /**
     * Returns true if the current local media matches cast media or if the cast media isn't loaded
     *
     * @returns {boolean}
     */
    isMediaMatch: function () {
      return (this.castMedia.media === null || this.castMedia.media === undefined
      || this.localMedia.url === this.castMedia.media.contentId);
    },
    hasCastSession: function () {
      return (Object.keys(this.session).length > 0
      && this.session.state === chrome.cast.SessionStatus.CONNECTED);
    }
  };
  cast.CastManager = CastManager;
})();
