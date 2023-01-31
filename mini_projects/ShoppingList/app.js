var app = angular.module ('ShoopingListApp', []);

app.controller ('ListController', function ($scope) {
  $scope.msg = `Press Reset to reset your list items`;

  $scope.list = ['milk', 'eggs', 'cheese'];
  $scope.addItem = function (z) {
    $scope.list.push (z);
    $scope.newItem = '';
  };
  $scope.remove = function (y) {
    var removeItem = $scope.list.indexOf (y);
    $scope.list.splice (removeItem, 1);
    $scope.newItem = '';
  };
  $scope.resetList = function () {
    $scope.list = ['milk', 'eggs', 'cheese'];
    $scope.newItem = '';
  };
});
