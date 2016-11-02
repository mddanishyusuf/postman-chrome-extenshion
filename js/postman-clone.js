var app = angular.module('postman-clone',[]);

// https://dev.twitter.com/overview/api/response-codes

app.controller('homeController',['$scope','$http',function(sc,http){
  sc.show_result = false
  sc.loading_icon = false
  sc.sended_url = function(){
  sc.method_name = sc.http_option
  sc.show_result = false
  sc.loading_icon = true
    http({method: sc.http_option, url: sc.url}).success(function(data,status){
        sc.result = data
        sc.status =  status
    }).error(function (data, status, header, config) {
        sc.status =  status
    }).finally(function() {
      sc.show_result = true      
      sc.loading_icon = false
    });
	}

  sc.get_error_message = function(code){
    if(code == 200){      
      return "Success!"
    }
    if(code == 404){
      return "Not Found ( The URI requested is invalid or the resource requested, such as a user, does not exists. Also returned when the requested format is not supported by the requested method. )"
    }
    if(code == 405){      
      return "HTTP Error 405 Method not allowed"
    }
  }
}]);