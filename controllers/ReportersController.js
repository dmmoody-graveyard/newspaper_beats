newspaperBeats.controller('ReportersCtrl', function ReportersCtrl($scope, ReportersFactory) {
  $scope.reporters = ReportersFactory.reporters;
  $scope.ReportersFactory = ReportersFactory;
});