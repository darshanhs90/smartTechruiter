var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http) {


//php request to get data from "listOfNames"
$scope.pInfo='';
$scope.listOfNames='';
$http.get('http://techrecruit.site40.net/retrieve.php')
                    .success(function(data, status, headers, config) {
                      alert(data);
                     console.log(data);
                            $scope.listOfNames=data;
                            console.log(data);
                    }).error(function(data, status) { 
                        alert("Error While Fetching Data,Try Again");
                    });  


$scope.getInfo=function($val){
	//get text corresponding to the val and pass the val  
    //call getPerson info with email id
     var email=$scope.listOfNames[$val].email;
$http({
    url: 'http://localhost:1337/personInfo', 
    method: "GET",
    params:{email:email}
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
    $scope.pInfo=data;
    $scope.profiles=data.socialProfiles;
 });




};
$scope.getSnaScore=function($val){
//sna score based on the text input
var textval=$scope.listOfNames[$val].rec_data;
$http({
    url: 'http://localhost:1337/twitterInsight', 
    method: "GET"
 }).success(function(data, status, headers, config) {
    alert(data);
    console.log(data);
 });
};


});