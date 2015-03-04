var cast = window.cast || {};

(function () {
  'use strict';

  MediaStatus.STATE = {
    'PAUSE': 0,
    'PLAY': 1,
    'STOP': 2,
    'SEEK': 3
  };

  /**
   * Class to glue together video player UI
   *
   * MediaData is expected in the format of
   * @param mediaData
   * @constructor
   */
  function MediaStatus (mediaData) {
    this.mediaData = mediaData;
    this.media = null;
    this.session = {};
    this.state = MediaStatus.STATE.STOP;
    this.timeRemainingString = "0:00:00";
    this.durationS = 50000;
    this.currentTimeS;
    this.seekTimeS;
    this.volume = 50;
    this.isCasting = false;
    this.castMediaData = null;
    this.previousState = MediaStatus.STATE.PAUSE;
  }

  MediaStatus.prototype = {
    play: function() {
      this.state = MediaStatus.STATE.PLAY;
    },
    pause: function () {
      this.state = MediaStatus.STATE.PAUSE;
    },
    seek: function(time) {
      this.previousState = this.state;
      this.state = MediaStatus.STATE.SEEK;
      this.seekTimeS = time;
      if(this.durationS != 0){
        this.timeRemainingString = this.secondsToHHMMSS(this.durationS - time);
      }
    },
    toPreviousState: function() {
      this.state = this.previousState;
    },
    setDuration: function(durationS) {
      this.durationS = durationS;
      this.timeRemainingString = this.secondsToHHMMSS(durationS);
    },
    setCurrentTime:function(timeS) {
      this.currentTimeS = timeS;
      this.timeRemainingString = this.secondsToHHMMSS(this.durationS - timeS);
    },
    getCurrentPercentageComplete: function() {
      return this.currentTimeS/this.durationS;
    },
    floatToTime: function(floatVal) {
      return floatVal * this.durationS;
    },
    secondsToHHMMSS: function (seconds) {
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds % 3600)/60);
      var seconds = Math.floor(seconds % 60);

      if (minutes < 10) {minutes = "0" + minutes;}
      if (seconds < 10) {seconds = "0" + seconds;}

      return hours + ':' + minutes + ':' + seconds;
    }
  };

  cast.MediaStatus = MediaStatus;
})();
