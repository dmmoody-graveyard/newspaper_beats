newspaperBeats.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addNewBeat = function() {
    factory.beats.push({ name: factory.beatName });
    factory.beatName = null;
  };

  return factory;
});