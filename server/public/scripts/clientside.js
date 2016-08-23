var myApp = angular.module("myApp", []);
//empty array can contain third-party dependecies

myApp.controller("IndexController", ["$scope", "$http", function($scope, $http) {

    console.log("IndexController loaded");


    $scope.customerClick = function(){
      var clickedID = this.customer.id;

      $http({
          method: 'GET',
          url: '/orders/' + clickedID
      }).then(function(response) {
          console.log('response object', response);
          $scope.orders = response.data;
          console.log(response.data);
      });

    }

    $http({
        method: 'GET',
        url: '/customers'
    }).then(function(response) {
        console.log('response object', response);
        $scope.customerList = response.data;
    });
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
