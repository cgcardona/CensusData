'use strict';
$(document).ready(function(){
  var CensusData = {};
  var CensusDataMap = Object.create(CensusData);
  CensusDataMap.drawMap = function(lat, lon){
    $('#map_canvas').css('height',$(window).height() - 50);
    var markers = [];
    var lat = lat || 38.828175;
    var lon = lon || -98.5795;
    var myOptions = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    CensusDataMap.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }

  $.get('http://thedataweb.rm.census.gov/data/2010/sf1?key=&get=P0010001,NAME&for=state:*', function(data) {
    data.shift();
    data.pop();
    data.forEach(function(element){
    console.log(element);
    });
  });

  CensusDataMap.drawMap();
});
