var newspaperBeats = angular.module('newspaperBeats', ['ui.router']);

newspaperBeats.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: "newspaperBeatsCtrl"
  });

  $stateProvider.state('reporters', {
    url: "/reporters",
    templateUrl: "partials/reporters.html",
    controller: "ReportersCtrl"
  });
});