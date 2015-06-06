var app = angular.module('zdc_ravetext', []);

app.directive('zdcRavetext', ['$compile', function($compile){
    var style = "{'background-image': 'linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-image': '-webkit-linear-gradient(0deg, ' + zdcRtConfig.output.background + ')'," +
        "'background-size': '1000% 1000%', " +
        "'color': 'transparent'," +
        "'-webkit-background-clip': 'text'," +
        "'background-clip': 'text'," +
        "'-webkit-animation': 'AnimationName ' + zdcRtConfig.output.animation + ' infinite'," +
        "'-moz-animation': 'AnimationName ' + zdcRtConfig.output.animation + ' infinite', " +
        "'-o-animation': 'AnimationName ' + zdcRtConfig.output.animation + ' infinite', " +
        "'animation': 'AnimationName ' + zdcRtConfig.output.animation + ' infinite'}";

    var linkFunction = function(scope, elem, attrs){
        elem.text('<span class="" ng-style="' + style + '">' + elem.html() + '</span>');
        scope.zdcRtConfig.output = {};
        scope.zdcRtConfig.output = zdcRt.parseAll(scope.zdcRtConfig);
        console.log(scope);
        htmlText = elem.text();
        template = angular.element($compile(htmlText)(scope));
        elem.replaceWith(template);
    };

    var zdcRt = {
        parseAll: function(input){
            var output = {};
            output.background = this.backgroundParse(input.background);
            output.rate = this.rateParse(input.rate);
            output.timing = this.timingParse(input.timing);
            output.animation = output.rate + ' ' + output.timing;
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
            if(!input){
                input = '1';
            }
            return input + 's';
        },
        timingParse: function(input){
            if(!input){
                input = 'linear';
            }
            return input;
        }
    };

  return {
    restrict: 'E',
    scope: true,
      link: linkFunction
  }
}]);