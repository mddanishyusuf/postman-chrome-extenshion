var app = angular.module('postman-clone',[]);

// https://dev.twitter.com/overview/api/response-codes

app.controller('homeController',['$scope','$http',function(sc,http){
	sc.sended_url = function(){
    http({method: sc.http_option, url: sc.url}).success(function(data,status){
        sc.result = data
        sc.status =  status
    }).error(function (data, status, header, config) {
        sc.status =  status
    })
	}
}]);