var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {


//php request to get data from "listOfNames"

$scope.getInfo=function($val){
	//get text corresponding to the val and pass the val  
    //call getPerson info with email id
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });




};
$scope.getSnaScore=function($val){
//sna score based on the text input
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });
};


});