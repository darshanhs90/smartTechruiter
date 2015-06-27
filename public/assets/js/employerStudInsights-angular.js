var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {


//php request to get data from "listOfNames"

$scope.getInsights=function($val){
	//get text corresponding to the val and pass the val  
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });




};
$scope.shortlist=function($val){
	//send shortlist message and email
	//get phone num and email from array corresponding the the val and pass it with custom text
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });




};
$scope.offer=function($val){
	//send job offer message,call and email
	//get phone num and email from array corresponding the the val and pass it with custom text
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });
};






$scope.reject=function($val){
//send job reject email
$http({
    url: 'http://smarttechruiter.mybluemix.net/message', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });
};



});