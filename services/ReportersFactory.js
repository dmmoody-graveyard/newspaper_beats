newspaperBeats.factory('ReportersFactory', function ReportersFactory() {
  var factory = {};
  factory.reporters = [];
  factory.addNewReporter = function() {
    factory.reporters.push({ name: factory.reporterName, employmentYears: factory.reporterYears, dateOfBirth: factory.reporterBirthDate });
    factory.reporterName = null;
    factory.reporterYears = null;
    factory.reporterBirthDate = null;
  };

  return factory;
});