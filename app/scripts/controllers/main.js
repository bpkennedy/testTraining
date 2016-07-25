'use strict';

/**
 * @ngdoc function
 * @name testTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testTrainingApp
 */
angular.module('testTrainingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
