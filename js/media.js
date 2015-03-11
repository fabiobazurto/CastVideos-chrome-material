/**
 * Manages media content
 */
var cast = window.cast || {};

(function(){
  'use strict';

  Media.STATE = {
    'PAUSE': 0, //has started playing but is currently paused
    'PLAY': 1, //currently playing
    'STOP': 2, //has never started playing
    'BUFFERING':3 //buffering
  };

  function Media(media) {
    this.title = media.title;
    this.url = media.url;
    this.thumbnailImageUrl = media.thumbnailImageUrl;
    this.creator = media.creator;
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
    this.duration = 10000;

    /**
     * String to display for time remaining
     * @type {string}
     */
    this.timeRemainingString = "0:00:00";
  }

  /**
   * Converts time in seconds to HH:MM:SS
   *
   * @param seconds {number}
   * @returns {string}
   */
  Media.secondsToHHMMSS = function (seconds) {
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
    setDuration: function (duration) {
      this.duration = duration;
    },
    /**
     * Sets the content currentTime and updates the time remaining string
     *
     * @param time {number}
     */
    setCurrentTime: function (time) {
      this.currentTime = time;
      this.timeRemainingString = Media.secondsToHHMMSS(this.duration - time);
    },
    /**
     * Returns the current percentage of completion for the content
     *
     * @returns {number}
     */
    getCurrentPercentageComplete: function () {
      return this.currentTime / this.duration;
    },
    /**
     * Converts a percentage to duration of video content time
     *
     * @param floatVal {number}
     * @returns {number}
     */
    floatToTime: function (floatVal) {
      return floatVal * this.duration;
    }
  };
  cast.Media = Media;
})();
