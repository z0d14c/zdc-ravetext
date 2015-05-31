var app = angular.module('zdc_ravetext', []);

app.directive('zdcRavetext', ['$compile', function($compile){
    var style = "{'background-image': 'linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-image': '-webkit-linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-size': '1000% 1000%', " +
        "'color': 'transparent'," +
        "'-webkit-background-clip': 'text'," +
        "'background-clip': 'text'," +
        "'-webkit-animation': 'AnimationName 1s ease infinite'," +
        "'-moz-animation': 'AnimationName 1s ease infinite', " +
        "'-o-animation': 'AnimationName 1s ease infinite', " +
        "'animation': 'AnimationName 1s ease infinite'}";

    var linkFunction = function(scope, elem, attrs){
        elem.text('<span class="" ng-style="' + style + '">' + elem.html() + '</span>');
        scope.zdcRtConfig.output = {};
        scope.zdcRtConfig.output.background = zdcRt.bckgImage(scope.zdcRtConfig.background);
        htmlText = elem.text();
        template = angular.element($compile(htmlText)(scope));
        elem.replaceWith(template);
    };

    var zdcRt = {
        bckgImage: function (input){ //takes input of hex color codes array and formats them
            var output = '';
            angular.forEach(input, function(color, index){
                output = output + color;
                if(index !== (input.length -1)){
                    output = output + ', ';
                }
            });
            return output;
        }
    };

  return {
    restrict: 'E',
    scope: true,
      link: linkFunction
  }
}]);