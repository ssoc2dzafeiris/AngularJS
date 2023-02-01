var app = angular.module ('RembrandtApp', []);

app.controller ('RembrandtCtrl', function ($scope) {
  $scope.title = 'Rembrandt Paintings';
  $scope.description = 'Mini projects in AngulaJs';
  $scope.paintingCounter = 0;
  $scope.paintings = [
    'media/1.jpg',
    'media/2.jpg',
    'media/3.jpg',
    'media/4.jpg',
    'media/5.jpg',
  ];

  // Functions
  $scope.previous = function () {
    $scope.paintingCounter = $scope.paintingCounter - 1;
  };
  $scope.next = function () {
    $scope.paintingCounter = $scope.paintingCounter + 1;
    if ($scope.paintingCounter > $scope.paintings.length) {
      $scope.paintingCounter = 0;
    }
  };
});
