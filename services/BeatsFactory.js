newspaperBeats.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addNewBeat = function() {
    factory.beats.push({ name: factory.beatName, reporters: factory.reportersAssigned });
    factory.beatName = null;
    factory.reportersAssigned = null;
  };

  return factory;
});