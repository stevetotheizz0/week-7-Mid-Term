var dataset = 'https://raw.githubusercontent.com/stevetotheizz0/week-7-Mid-Term/master/Phila_Fireplace_Bars.geojson';
var nextPage = '#slide2';
var previousPage = '#slide1';
var currentPage = '#slide1';

var switchNext = function(){
  switch (currentPage) {
      case '#slide1':
        currentPage = '#slide2';
        nextPage = '#slide3';
        previousPage = '#slide1';
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
        break;
      case '#slide4':
        nextPage = '#slide5';
        previousPage = '#slide4';
        currentPage = '#slide5';
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
        break;
      case '#slide5':
        nextPage = '#slide5';
        previousPage = '#slide3';
        currentPage = '#slide4';
        break;
  }
};

var clicking = function(){console.log("clicking");};

var changeMap = function(){
  if (currentPage === '#slide2'){
    numericField1 = $('#num1').val();
    console.log("numericField1", numericField1);
    resetMap();
  }
};

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

var myFeatureGroup;
var parsedData;

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
