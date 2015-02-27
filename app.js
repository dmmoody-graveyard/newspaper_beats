var newspaperBeats = angular.module('newspaperBeats', ['ui.router']);

newspaperBeats.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('reporters', {
    url: "/reporters",
    templateUrl: "partials/reporters.html",
    controller: "ReportersCtrl"
  });
});