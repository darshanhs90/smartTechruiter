var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {

$http({
    url: 'http://localhost:3000/home', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
 });
});