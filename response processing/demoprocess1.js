// Instantiate the app, the 'myApp' parameter must 
// match what is in ng-app
var myApp = angular.module('myApp', []);

// Create the controller, the 'ToddlerCtrl' parameter 
// must match an ng-controller directive
myApp.controller('ToddlerCtrl', function ($scope) {
  // Now scenario is i have to process this json and put the data in one array
    $scope.processedElem1 = new Array();
    $scope.processedElem2 = new Array();
    temp = angular.fromJson($scope.hello[0].NKDemoResp);
    for(var  i = 0 ; i < $scope.hello[0].NKDemoResp.NKDemo.length ; i++){
          $scope.processedElem1.push({name : $scope.hello[0].NKDemoResp.NKDemo[i].emplName,
                                      empid   : $scope.hello[0].NKDemoResp.NKDemo[i].emplId});
        for(var j = 0 ; j < $scope.hello[0].NKDemoResp.NKDemo[i].crewEffectsunitResp.length ; j++){
          $scope.processedElem2.push({empid : $scope.hello[0].NKDemoResp.NKDemo[i].crewEffectsunitResp[j].emplId,
                                      nounits : $scope.hello[0].NKDemoResp.NKDemo[i].crewEffectsunitResp[j].noUnits,
                                      quna : $scope.hello[0].NKDemoResp.NKDemo[i].crewEffectsunitResp[j].unitType});
        } 
    }
    
    console.log($scope.processedElem1);
    //[{"name":"Shivam Gupta","empid":"007"},{"name":"Niraj Sazzie","empid":"008"}]
    console.log($scope.processedElem2);
    //[{"empid":"007","nounits":4,"quna":"PC"},{"empid":"008","nounits":1,"quna":"PC"},{"empid":"008","nounits":2,"quna":"PCS"},{"empid":"008","nounits":4,"quna":"PCS"}]
    
    $scope.empid;
    $scope.empname;
    //max no of units that you get
    $scope.unit1;
    $scope.unit2;
    $scope.unit3;
    // max no of names of unit
    $scope.unitname1;
    $scope.unitname2;
    $scope.unitname3;
    $scope.processedElem = [];
    // now idea is to merge both the array into one array on the base of empid
    $scope.totalVal;
    for(var i = 0 ; i < $scope.processedElem1.length ; i++){
      $scope.totalVal = 0; 
      for(var j = 0 ; j < $scope.processedElem2.length ; j++){
        if($scope.processedElem1[i].empid == $scope.processedElem2[j].empid){
          $scope.totalVal++;
          if(j==0){
                $scope.empid      =  $scope.processedElem1[i].empid;
                $scope.empname    =  $scope.processedElem1[i].name;
                $scope.unit1      =  $scope.processedElem2[j].nounits;
                $scope.unitname1  =  $scope.processedElem2[j].quna;
          }else if(j==1){
                $scope.unit2      =  $scope.processedElem2[j].nounits;
                $scope.unitname2  =  $scope.processedElem2[j].quna;
          }else if(j==2){
                $scope.unit3      =  $scope.processedElem2[j].nounits;
                $scope.unitname3  =  $scope.processedElem2[j].quna;
          }
        }
      }
        if($scope.totalVal == 1){
          $scope.processedElem.push({id: $scope.empid,name:$scope.empname,unit1:$scope.unit1,unitname1:$scope.unitname1});
        }else if($scope.totalVal == 2){
          $scope.processedElem.push({id: $scope.empid,name:$scope.empname,unit1:$scope.unit1,unitname1:$scope.unitname1,unit2:$scope.unit2,unitname2:$scope.unitname2});
        }else if($scope.totalVal == 3){
          $scope.processedElem.push({id: $scope.empid,name:$scope.empname,unit1:$scope.unit1,unitname1:$scope.unitname1,unit2:$scope.unit2,unitname2:$scope.unitname2,unit3:$scope.unit3,unitname3:$scope.unitname3});
        }
    }
  
    console.log($scope.processedElem);
  //http://plnkr.co/edit/tyvOJIONtpAaZySb9mLR?p=preview   
  //http://plnkr.co/edit/uW2PPVlSdOunsA1ZaNKN?p=preview
  //[{"id":"008","name":"Shivam Gupta","unit1":4,"unitname1":"PC"},{"id":"008","name":"Niraj sazzie","unit1":4,"unitname1":"PC","unit2":1,"unitname2":"PC","unit3":2,"unitname3":"PCS"}]
});
