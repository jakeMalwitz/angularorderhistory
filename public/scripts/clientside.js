var myApp = angular.module("myApp", []);
//empty array can contain third-party dependecies

myApp.controller("IndexController", ["$scope", "$http", function($scope, $http) {

    console.log("IndexController loaded");



    $scope.customerList = ["name","drew","another"];
    // $http({
    //     method: 'GET',
    //     url: '/things'
    // }).then(function(response) {
    //     console.log('response object', response);
    //     $scope.snackss = response.data;
    // });
    //
    // $http({
    //         method: 'POST',
    //         url: '/things',
    //         data: {
    //             thing: 'food'
    //         }
    //     })
    //     .then(function(response) {
    //         console.log('response object', response);
    //         $scope.snacks = response.data;
    //     });


}]);
