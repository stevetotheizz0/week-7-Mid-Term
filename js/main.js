var dataset = '';

var ratingFilter = function() {

};

var eachFeature = function(feature, layer) {
  layer.on('click', function (e) {

    }
  );
};

var myFilter = function(feature) {
  if(feature.properties.COLLDAY === " ") {return false;}
  else {return true;}
};

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    var myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyle,
      filter: myFilter
    }).addTo(map);
  });
});

var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).hide() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.



  ===================== */
  $('#intro').hide();
  $('#results').show();
};

/* =====================
Leaflet Configuration
===================== */

var myMarkers = [L.marker([39.9522, -75.1639])];

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite =L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

_.each(myMarkers, function(marker) { marker.addTo(map); });
