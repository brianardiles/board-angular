var app = angular.module('boardApp', []);
app.controller('boardController', function($scope, $http, $filter) {
    $http.get("http://private-52da20-board4.apiary-mock.com/issues").then(function (response) {
	
		angular.forEach(response.data, function(issues) {
			$scope.issues = issues.issues;
		});
    });
});