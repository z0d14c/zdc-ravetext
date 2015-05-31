var app = angular.module('zdc_ravetext_example', ['zdc_ravetext']);

app.controller('MainCtrl', function($scope) {
    $scope.zdcRtConfig = {
        background  :['#246655', '#cec763', '#c463ce', '#63bace', '#3046bb', '#000000']
        };
  $scope.name = 'World';
});

