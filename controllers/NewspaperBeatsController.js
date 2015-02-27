newspaperBeats.controller('newspaperBeatsCtrl', function newspaperBeatsCtrl($scope, BeatsFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});