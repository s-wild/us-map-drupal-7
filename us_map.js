/**
 * @file
 * Custom scripts for theme.
 */
 (function ($) {

  Drupal.behaviors.usMap = {
    attach: function (context, settings) {

      // console.log(stateStyles);
      
    }
  };

  function getStateHex(){
    // Build state and hex list.
    var stateHex = $("#us-map").data("states").toUpperCase();
    var partsOfStateHex = stateHex.split(':');
    var i = 0;
    var len = partsOfStateHex.length;

    var stateStyles = {};
    var seperator = "";
    partsOfStateHex.forEach(function(element) {
      var splitArray = element.split(',');
      stateStyles[splitArray[0]] = splitArray[1];
    });
    console.log(stateStyles);
    return stateStyles;
  }

})(jQuery);
