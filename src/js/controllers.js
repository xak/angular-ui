'use strict';

/** Controllers */
angular.module('myApp.controllers', []).controller('helloWorldCtrl',function ($scope, $timeout) {
//	$scope.name = { first: "Jane", last: "Doe" };
	$scope.person = { firstName: "Jane", lastName: "Doe" };
	$scope.mask = "(999) 999-9999 ext 99";
	$scope.getModel = function () {
			return JSON.stringify($scope.person, undefined, 2);
	};
	
	var colors = ["white", "yellow", "lightgray"];
	var activeColor = 0;
	$scope.modelStatus = function() {
		return { backgroundColor: colors[activeColor] };
	};
	$scope.focusCallback = function() {
		activeColor = 1;
	};
	$scope.blurCallback = function() {
		activeColor = 2;
		$timeout(function() { activeColor = 0; }, 2000);
	};
	$scope.helpKeyDown = function($event) {
			console.log($event);
			if ($event.target.getAttribute('ng-model') == 'person.firstName') {
				$scope.helpText = "Enter your first name.";
			}
			if ($event.target.getAttribute('ng-model') == 'person.lastName') {
				$scope.helpText = "Enter your last name.";
			}
			if ($event.target.getAttribute('ng-model') == 'person.phone') {
				$scope.helpText = "Enter your phone number.";
			}
			$timeout(function() { $scope.helpText = "" }, 10000);
	};
});	


angular.module('myApp.controllers', []).controller('MapCtrl',function ($scope, $timeout) {
	$scope.myMarkers = [];

	$scope.mapOptions = {
			center: new google.maps.LatLng(37.782,-122.418),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.SATELLITE
	};

// 	var cloudLayer = new google.maps.weather.CloudLayer();
// 
// 	$timeout(function(){
// 			cloudLayer.setMap($scope.myMap);
// 	}, 1000);

});	