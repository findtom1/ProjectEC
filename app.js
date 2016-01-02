/**
 * Created by prashast.bindal on 02/01/16.
 */

'use strict';

angular.module('postJs',[]).
    controller('postController', ['$scope','$http',function($scope,$http){
        var url = "data.txt";
        var post;
        $http.get(url).then( function successCallback(response) {
                $scope.posts=response.data;}
            ,function errorCallback(response){}
        )}]);

//    $scope.posts=[
//        {
//            profPic : "prashast.jpg",
//            title : "Prashast",
//            body : "uploaded a paper"
//        },
//
//        {
//            profPic : "prashast.jpg",
//            title : "Pritesh",
//            body : "70%"
//        }
//    ];
//}]);