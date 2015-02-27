newspaperBeats.controller('reportersCtrl', function reportersCtrl($scope, ReportersFactory) {
  $scope.reporters = ReportersFactory.reporters;
  $scope.ReportersFactory = ReportersFactory;
});