var cast = window.cast || {};

(function () {
  'use strict';
  var loadCoreSignal = function () {
    var coreSignalImport = document.createElement('link');
    coreSignalImport.setAttribute('rel', 'import');
    coreSignalImport.setAttribute('href', '../bower_components/core-signals/core-signals.html');
    document.body.appendChild(coreSignalImport);
  };

  if (document.readyState === "complete") {
    loadCoreSignal();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      loadCoreSignal();
    });
  }


  MediaStatus.STATE = {
    'PAUSE': 0, //has started playing but is currently paused
    'PLAY': 1, //currently playing
    'STOP': 2, //has never started playing
    'BUFFERING':3
  };

  /**
   * Class to glue together video player UI
   *
   * MediaData is expected in the format of
   * @param mediaData
   * @constructor
   */
  function MediaStatus(mediaData) {
    this.mediaData = mediaData;
    this.media = null;
    this.session = {};
    this.state = MediaStatus.STATE.STOP;
    this.timeRemainingString = "0:00:00";
    this.durationS = 50000;
    this.currentTimeS;
    this.volume = 50;
    this.isCasting = false;
    this.castMediaData = null;
    this.previousState = MediaStatus.STATE.PAUSE;
  }

  MediaStatus.prototype = {
    play: function () {
      this.state = MediaStatus.STATE.PLAY;
    },
    pause: function () {
      this.state = MediaStatus.STATE.PAUSE;
    },
    seek: function (time, sender) {
      //Fire a core-signal event
      var seekEvent = new CustomEvent('core-signal',
          {
            'detail': {
              'name': 'seek',
              'data': {
                'currentTime': time,
                'sender': sender
              }
            }
          });
      document.dispatchEvent(seekEvent);
      this.currentTimeS = time;

      if (this.durationS != 0) {
        this.timeRemainingString = this.secondsToHHMMSS(this.durationS - time);
      }
    },
    setDuration: function (durationS) {
      this.durationS = durationS;
      this.timeRemainingString = this.secondsToHHMMSS(durationS);
    },
    setCurrentTime: function (timeS) {
      this.currentTimeS = timeS;
      this.timeRemainingString = this.secondsToHHMMSS(this.durationS - timeS);
    },
    getCurrentPercentageComplete: function () {
      return this.currentTimeS / this.durationS;
    },
    floatToTime: function (floatVal) {
      return floatVal * this.durationS;
    },
    secondsToHHMMSS: function (seconds) {
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
    }
  };

  cast.MediaStatus = MediaStatus;
})();
