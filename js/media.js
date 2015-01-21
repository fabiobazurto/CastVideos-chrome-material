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
 * Object to represent a local castable media content
 */
(function() {
  'use strict';

  Media.STATE = {
    'PAUSE': 0, //has started playing but is currently paused
    'PLAY': 1, //currently playing
    'STOP': 2, //has never started playing
    'BUFFERING': 3 //buffering
  };

  function Media(media) {
    this.title = media.title;
    this.url = media.url;
    this.thumbnailImageUrl = media.thumbnailImageUrl;
    this.studio = media.studio;
    this.description = media.description;

    /**
     * Current media state
     *
     * @type {number}
     */
    this.state = Media.STATE.STOP;

    /**
     * Volume of media
     * @type {number}
     */
    this.volume = 50;

    /**
     * Current time in video in seconds
     * @type {number}
     */
    this.currentTime = 0;

    /**
     * Video duration in seconds
     * @type {number}
     */
    this.duration = 0;

    /**
     * String to display for time remaining
     * @type {string}
     */
    this.timeRemainingString = "0:00:00";

    this.volume = .5;
  }

  /**
   * Converts time in seconds to HH:MM:SS
   *
   * @param seconds {number}
   * @returns {string}
   */
  Media.secondsToHHMMSS = function(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var seconds = Math.floor(seconds % 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  };

  Media.prototype = {
    /**
     * Sets the content duration
     *
     * @param duration {number}
     */
    setDuration: function(duration) {
      this.duration = duration;
    },
    /**
     * Sets the content currentTime and updates the time remaining string
     *
     * @param time {number}
     */
    setCurrentTime: function(time) {
      this.currentTime = time;
      this.timeRemainingString = Media.secondsToHHMMSS(this.duration - time);
    },
    /**
     * Returns the current percentage of completion for the content
     *
     * @returns {number}
     */
    getCurrentPercentageComplete: function() {
      return this.currentTime / this.duration;
    },
    /**
     * Converts a percentage to duration of video content time
     *
     * @param floatVal {number}
     * @returns {number}
     */
    floatToTime: function(floatVal) {
      return floatVal * this.duration;
    }
  };
  cast.Media = Media;
})();
