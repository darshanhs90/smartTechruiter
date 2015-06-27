var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {

$scope.login=function(){
 $location.href('/studentpostlogin.html');
}
});