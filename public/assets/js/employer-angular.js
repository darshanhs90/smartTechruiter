var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {
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

$scope.login=function(){
	//alert('asd');
 window.location.replace('./employerpostlogin.html');
}
});