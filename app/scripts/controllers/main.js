'use strict';

/**
 * @ngdoc function
 * @name cjAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cjAppApp
 */
angular.module('cjAppApp')
  .controller('MainCtrl', function (API_URL) {
    console.log(API_URL);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
