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