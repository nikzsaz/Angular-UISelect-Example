'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

app.controller('DemoCtrl', function ($scope, $http, $timeout, $interval) {


  $scope.people = [
    { name: 'Niraj'},
    { name: 'Shivam'},
    { name: 'Arun'},
    { name: 'Mohit'},
    { name: 'Koushik'},
    { name: 'KedaBro'},
    { name: 'Tripathi'},
    { name: 'Nlma'},
    { name: 'Nshma'},
    { name: 'BsCoder'}
  ];
  
  $scope.multipleDemo = [];
    
  $scope.submitValue = function(){
    console.log($scope.multipleDemo.selectedPeople);
  }
});
