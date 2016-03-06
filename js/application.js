var dataset = 'https://raw.githubusercontent.com/stevetotheizz0/week-7-Mid-Term/master/Phila_Fireplace_Bars.geojson';
var nextPage = '#slide2';
var previousPage = '#slide1';
var currentPage = '#slide1';

var showNext = function() {
  $(currentPage).hide();
  $(nextPage).show();
  switchNext();
};

var showPrevious = function() {
  $(currentPage).hide();
  $(previousPage).show();
  switchPrev();
};

var switchNext = function(){
  switch (currentPage) {
      case '#slide1':
        currentPage = '#slide2';
        nextPage = '#slide3';
        previousPage = '#slide1';
        $('#button-previous').show();
      break;
      case '#slide2':
        nextPage = '#slide4';
        previousPage = '#slide2';
        currentPage = '#slide3';
      break;
      case '#slide3':
        nextPage = '#slide5';
        previousPage = '#slide3';
        currentPage = '#slide4';
        setUpSlide4();
        break;
      case '#slide4':
        nextPage = '#slide5';
        previousPage = '#slide4';
        currentPage = '#slide5';
        $('#button-next').hide();
        setUpSlide5();
        break;
      case '#slide5':
        nextPage = '#slide5';
        previousPage = '#slide4';
        currentPage = '#slide5';
        break;
  }
};

var switchPrev = function() {
  switch (currentPage) {
      case '#slide1':
        nextPage = '#slide2';
        previousPage = '#slide1';
        currentPage = '#slide1';
        break;
      case '#slide2':
        nextPage = '#slide2';
        previousPage = '#slide1';
        currentPage = '#slide1';
        $('#button-previous').hide();
        break;
      case '#slide3':
        nextPage = '#slide3';
        previousPage = '#slide1';
        currentPage = '#slide2';
        break;
      case '#slide4':
        nextPage = '#slide4';
        previousPage = '#slide2';
        currentPage = '#slide3';
        setUpSlide5();
        break;
      case '#slide5':
        nextPage = '#slide5';
        previousPage = '#slide3';
        currentPage = '#slide4';
        setUpSlide4();
        $('#button-next').show();
        break;
  }
};

var myFeatureGroup;
var parsedData;
var numericField2;

var changeMap = function(){
  if (currentPage === '#slide2'){
    numericField1 = $('#num1').val();
    resetMap();
    myFeatureGroup = L.geoJson(parsedData, {
      filter: function(feature, layer) {
        return parseInt(feature.properties.Rating) >= numericField1;
      }
    }).addTo(map);
  }
  if (currentPage === '#slide3'){
    numericField2 = $('#num2').val();
    resetMap();
    myFeatureGroup = L.geoJson(parsedData, {
      filter: function(feature, layer) {
        return feature.properties.Num_Reviews >= numericField2;
    }
    }).addTo(map);
  }
};

var setUpSlide4 = function(){
  resetMap();
  myFeatureGroup = L.geoJson(parsedData, {
    filter: function(feature, layer) {
      return feature.properties.Num_Reviews >= numericField2;
  },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.Name + '<br>' +"Rating:" + feature.properties.Rating + '<br>' + "Number of Reviews:" + feature.properties.Num_Reviews );}
    }).addTo(map).on('click', function(e) {
      map.setView(e.latlng, 20, {animate: true});
    });
};

var setUpSlide5 = function(){
  map.closePopup();
  map.removeLayer(myFeatureGroup);
  myFeatureGroup = L.geoJson(parsedData, {
    filter: function(feature, layer) {
      return feature.properties.Num_Reviews >= numericField2;
  },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(fireplaceCheckbox);}
    }).addTo(map).on('click', function(e) {
      map.setView(e.latlng, 20, {animate: true});
    });
};

var fireplaceCheckbox = '<input type="checkbox" name="fireplace" value="wood"> Wood Fireplace<br><input type="checkbox" name="fireplace" value="gas" checked> Gas Fireplace<br><input id="fireplaceType" type="submit" value="Submit">' ;

var fireplaceInput = function(){alert('Great Job! Thanks for letting us know all the deets about this fireplace.');};


var getAndParseData = function() {
  $(document).ready(function() {
    $.ajax(dataset).done(function(data) {
      parsedData = JSON.parse(data);
      myFeatureGroup = L.geoJson(parsedData).addTo(map);
    });
  });
};

var resetMap = function() {
  map.removeLayer(myFeatureGroup);
};


/*
var eachFeature = function(feature, layer){if (feature.properties.Name !== "XFINITY Live! Philadelphia") {
         layer.bindPopup(feature.properties.Name);} };
var markers = _.filter(parsedData, function(num) {return feature.properties.FEATURE == 'NATURE OBSERVATION';});
*/
