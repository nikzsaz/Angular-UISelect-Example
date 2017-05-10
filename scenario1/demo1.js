'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

app.controller('DemoCtrl', function ($scope, $http, $timeout, $interval) {

  $scope.oldArray = [];
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
  var people = $scope.people;
  var oldArray = [];
  // Now these two values by default need to be selected in multiple selection
  var array = "Niraj,Shivam";
  array = array.split(",");
  for(var i=0 ; i < array.length ; i++){
    oldArray.push({
      name : array[i]
    });
  }
  //filter is wokring fine now
  var filteredArray = people.filter(function(itm){
  return array.indexOf(itm.name) < 0;
  });
  $scope.filteredArray = filteredArray;
 console.log(filteredArray); 
 
  $scope.multipleDemo = {};
  $scope.multipleDemo.selectedPeople = [];
  for(var  i = 0 ; i < array.length ; i++){
    $scope.multipleDemo.selectedPeople.push({name : array[i]});
  }
  $scope.submitValue = function(){
    console.log($scope.multipleDemo.selectedPeople);
  }
});
