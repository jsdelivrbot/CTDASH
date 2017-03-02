var dashApp = angular.module("dashApp", ["ngRoute"]);

dashApp.controller('dashController', function($scope,$rootScope,$http) {

	
	$scope.fetchChartData  = function()
	{
		$scope.getPercentage();
		$scope.getPiechart();
		$scope.getweekchart();
	}
	
	/*----------------declared chart color and label commonly------------*/
	
	$scope.chart_colors = ["#5da5da","#60bd68","#faa43a","#f17cb0"];
	$scope.chart_labels = ["Pending","Processed","Shipped","Canceled"];
	
	/*----------------To show percenatage------------*/
	
	$scope.getPercentage = function () {
		$http({
		method: 'GET',
		url: '../api/orderDetails.json'
		}).then(function successCallback(response) {
			$("px-spinner").attr("finished", "true");
			if(response.data.error.code == 0)
			{
					var data = response.data.orders;
					var arr = [];
					$.each(response.data.orders, function(key,value) {
						arr.push(value);
					});
				 $scope.chartPerct = arr;
				 $scope.circle_max=response.data.total;
				 $scope.chart_circle=data.shipped;
				 $scope.show_perc_error = 0;
			}
			else
			{
				$scope.show_perc_error = 1;
				$scope.perc_error_msg = "NO DATA FOUND";
			}			
			
		}, function errorCallback(response) {

		});
	}
	
	/*--------------To show piechart--------------------*/
	$scope.getPiechart = function () {
		
		$http({
		method: 'GET',
		url: '../api/totalOrders.json'
		}).then(function successCallback(response) {
			$("px-spinner").attr("finished", "true");
			if(response.data.error.code == 0)
			{
					var data = response.data.orders;
					var cnt_arr = [];
					$.each(response.data.orders, function(key,value) {
							cnt_arr.push(value);
					}); 
				$scope.totOrder=response.data.total;
				$scope.chartCount =cnt_arr;	// [{"x":40,"y":"Pending"},{"x":30,"y":"Processed"},{"x":20,"y":"Shipped"},{"x":2,"y":"Canceled"}];
				$scope.show_pie_error = 0;
			}
			else
			{
				$scope.show_pie_error = 1;
				$scope.pie_error_msg = "NO DATA FOUND";
			}			
			
		}, function errorCallback(response) {

		});	
	}
	/*--------------To show past 6 week chart--------------------*/
	
	$scope.getweekchart = function () {
		
		week_arr = [];
		main_arr = [];
		$http({
		method: 'GET',
		url: '../api/weekOrderData.json'
		}).then(function successCallback(response) {
			$("px-spinner").attr("finished", "true");
			if(response.data.error.code == 0)
			{
				
				$.each(response.data.orders,function(key,value){
					$.each(value, function(k,v) {
						week_arr.push(v);
					});
					main_arr.push(week_arr);
					week_arr = [];
				});
				
				$scope.weekCount =main_arr;//[[40,50,30,70,20,10],[30,20,10,15,15,15],[40,30,20,15,15,15],[40,30,20,15,15,15]];
				$scope.show_week_error = 0;
			}
			else
			{
				$scope.show_week_error = 1;
				$scope.week_error_msg = "NO DATA FOUND";
			}			
			
		}, function errorCallback(response) {

		});
	}
	
	$scope.fetchChartData(); 
});

