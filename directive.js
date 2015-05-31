var app = angular.module('zdc_ravetext', []);

app.directive('zdcRavetext', ['$interval','$compile', function($interval, $compile){
    var style = "{'background-image': zdcRtConfig.output.background," +
        "'background-image': zdcRtConfig.output.background2," +
        "'background-size': '1000% 1000%', " +
        "'color': 'transparent'," +
        "'-webkit-background-clip': 'text'," +
        "'background-clip': 'text'," +
        "'-webkit-animation': 'AnimationName 1s ease infinite'," +
        "'-moz-animation': 'AnimationName 1s ease infinite', " +
        "'-o-animation': 'AnimationName 1s ease infinite', " +
        "'animation': 'AnimationName 1s ease infinite'}";
    var zdcRt = {
        bckgPrefix: "linear-gradient(235deg, ",
        bckgPrefix2: " -webkit-linear-gradient(235deg, ",
        bckgImage: function (input, type){ //takes input of hex color codes and formats them
            var prefix  = this[type];
            var suffix = ")";
            var output = prefix;
            angular.forEach(input, function(color, index){
                output = output + color;
                if(index !== (input.length -1)){
                    output = output + ', ';
                } else {
                    output = output + suffix;
                }
            });
            return output;
        }
    };
    var linkFunction = function(scope, elem, attrs){
        scope.zdcRtConfig.output = {};
        scope.zdcRtConfig.output.background = zdcRt.bckgImage(scope.zdcRtConfig.background, 'bckgPrefix');
        scope.zdcRtConfig.output.background2 = zdcRt.bckgImage(scope.zdcRtConfig.background, 'bckgPrefix2');
        htmlText = elem.text();
    template = angular.element($compile(htmlText)(scope));
    elem.replaceWith(template);
  };

  return {
    restrict: 'E',
    scope: true,
    compile: function compile(elem, attr){
      elem.text('<span class="" ng-style="' + style + '">' + elem.html() + '</span>');
      return linkFunction;
    }
  }
}]);