'use strict';

/**
 * @ngdoc function
 * @name cjAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cjAppApp
 */
angular.module('cjAppApp')
  .controller('AboutCtrl', function (API_URL) {
    console.log(API_URL);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
