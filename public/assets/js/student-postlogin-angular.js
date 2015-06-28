var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {


$scope.recorder=false;
$scope.answerer=false;
$scope.txtarea="Enter your response with atleast a minimum of 150 words....";
$scope.recordVoice=function(){
$scope.recorder=true;
$scope.answerer=false;
};

$scope.answerText=function(){
$scope.recorder=false;
$scope.answerer=true;
};



/*$http({
    url: 'http://smarttechruiter.mybluemix.net/call', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });



 $http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });*/

});