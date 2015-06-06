var app = angular.module('zdc_ravetext', []);

app.directive('zdcRavetext', ['$compile', function($compile){
    var style = "{'background-image': 'linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-image': '-webkit-linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-size': '1000% 1000%', " +
        "'color': 'transparent'," +
        "'-webkit-background-clip': 'text'," +
        "'background-clip': 'text'," +
        "'-webkit-animation': 'AnimationName ' + zdcRtConfig.output.rate + ' ease infinite'," +
        "'-moz-animation': 'AnimationName ' + zdcRtConfig.output.rate + ' ease infinite', " +
        "'-o-animation': 'AnimationName ' + zdcRtConfig.output.rate + ' ease infinite', " +
        "'animation': 'AnimationName ' + zdcRtConfig.output.rate + ' ease infinite'}";

    var linkFunction = function(scope, elem, attrs){
        elem.text('<span class="" ng-style="' + style + '">' + elem.html() + '</span>');
        scope.zdcRtConfig.output = {};
        scope.zdcRtConfig.output = zdcRt.parseAll(scope.zdcRtConfig);
        htmlText = elem.text();
        template = angular.element($compile(htmlText)(scope));
        elem.replaceWith(template);
    };

    var zdcRt = {
        parseAll: function(input){
            var output = {};
            output.background = this.backgroundParse(input.background);
            output.rate = this.rateParse(input.rate);
            return output;
        },
        backgroundParse: function (input){ //takes input of hex color codes array and formats them
            var output = '';
            angular.forEach(input, function(color, index){
                output = output + color;
                if(index !== (input.length -1)){
                    output = output + ', ';
                }
            });
            return output;
        },
        rateParse: function (input){
            return input + 's';
        }
    };

  return {
    restrict: 'E',
    scope: true,
      link: linkFunction
  }
}]);