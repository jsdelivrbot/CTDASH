var dashApp = angular.module("dashApp");

    dashApp.factory('APIService', function($http,$rootScope) {
	
        var APIService = {};
        
        APIService.getOrderDetails = function (data) {            
            
            return  $http({
                        
                    'method'  :   'POST',
                    'url'     :   '../api/orderDetails.json'
                    'data'    :   data
                });
        }
        return APIService;
    });

