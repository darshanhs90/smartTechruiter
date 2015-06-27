var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {

$scope.login=function(){
	//alert('asd');
 window.location.replace('./studentpostlogin.html');
}
});