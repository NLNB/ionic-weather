angular.module('ionic.weather.filters', ['ionic.weather.services'])

.filter('temp', function(Settings) {
  return function(input) {
    if(Settings.getTempUnits() == 'f') {
      return input.fahrenheit;
    }
    return input.celsius;
  };
})

.filter('tempEnglish', function(Settings) {
  return function(input) {
    if(Settings.getTempUnits() == 'f') {
      return input.english;
    }
    return input.metric;
  };
})

.filter('int', function() {
  return function(v) {
    return parseInt(v) || '';
  };
})

.filter('tempInt', function() {
  return function(input) {
    return parseInt(input);
  }
});
