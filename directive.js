var app = angular.module('zdc_ravetext', []);

app.directive('zdcRavetext', ['$interval','$compile', function($interval, $compile){
  var linkFunction = function(scope, elem, attrs){
    htmlText = elem.text();
    template = angular.element($compile(htmlText)(scope));
    elem.replaceWith(template);
  };

  return {
    restrict: 'E',
    scope: true,
    compile: function compile(elem, attr){
        var style = "background-image: -webkit-linear-gradient(235deg, #246655, #cec763, #c463ce, #63bace, #3046bb);" +
        "background-image: linear-gradient(235deg, #246655, #cec763, #c463ce, #63bace, #3046bb);" +
       "background-size: 1000% 1000%; " +
       "color: transparent;" +
       "-webkit-background-clip: text;" +
       "background-clip: text;" +
       "-webkit-animation: AnimationName 1s ease infinite;" +
       "-moz-animation: AnimationName 1s ease infinite; " +
       "-o-animation: AnimationName 1s ease infinite; " +
       "animation: AnimationName 1s ease infinite;";
      elem.text('<span class="" style="' + style + '">' + elem.html() + '</span>');
      return linkFunction;
    }
  }
}]);