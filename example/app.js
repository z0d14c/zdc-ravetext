var app = angular.module('zdc-frontend', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('zdcRavetext', ['$interval','$compile', function($interval, $compile){
  var linkFunction = function(scope, elem, attrs){
    htmlText = elem.text();
    
    template = angular.element($compile(htmlText)(scope));
    elem.replaceWith(template);

  }
  return {
    // transclude: true,
    restrict: 'E',
    scope: true,
    compile: function compile(elem, attr){
      elem.text('<span class="ravetext">' + elem.html() + '</span>');
      return linkFunction;
    }
  }
}])