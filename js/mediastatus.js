var cast = window.cast || {};

(function () {
  'use strict';

  MediaStatus.STATE = {
    'PAUSE': 0,
    'PLAY': 1,
    'STOP': 2
  };

  function MediaStatus (mediaData) {
    this.mediaData = mediaData;
    this.media = null;
    this.session = {};
  }

  MediaStatus.prototype = {
    play: function() {

    },
    pause: function () {

    },
    seek: function(time) {

    }

  };

  cast.MediaStatus = MediaStatus;
})();
