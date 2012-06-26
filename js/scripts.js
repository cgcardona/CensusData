'use strict';
(function($){
  var Census = {};
  Census.methods = {
    init : function(options)
    {
      Census.settings = $.extend({
        'key'     : '7e31eccb17cd6e08aa9e8237b5e496dfee744176',
        'name'    : 'P0010001',
        'state'   : '*',
        'dataset' : 'sf1',
        'zoom'    : 5
      },options);

      Census.methods.drawMap();
      Census.methods.queryAPI();
      Census.methods.drawPolygons();
    },
    drawMap : function()
    {
      $('#map_canvas').css('height',$(window).height() - 50);

      var lat = lat || 37.828175;
      var lon = lon || -98.5795;

      var myOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: Census.settings.zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      Census.map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    },
    queryAPI : function()
    {
      //console.log('http://thedataweb.rm.census.gov/data/2010/' + Census.settings.dataset + '?key=' + Census.settings.key + '&get=' + Census.settings.name + ',NAME&for=state:' + Census.settings.state);
      $.get('http://thedataweb.rm.census.gov/data/2010/' + Census.settings.dataset + '?key=' + Census.settings.key + '&get=' + Census.settings.name + ',NAME&for=state:' + Census.settings.state, function(data) {
        // The data comes back with the first array being useless so shift it off.
        data.shift();

        var names = Object.getOwnPropertyNames(Census.settings.polygonData);
        names.forEach(function(el){
          data.forEach(function(e){
            if(e[1] == el)
              Census.settings.polygonData[el].push(e[0]);
          });
        });
        //console.log(data,names);

        var tmp = [];
        data.forEach(function(element){
             //console.log(element);
          //tmp.push(parseInt(element[0],10));
        });
        //var foobar = tmp.sort(function(a,b){return a-b});
        //foobar.forEach(function(e){
        //  console.log(e + 332928);
        //})
        //data.forEach(function(element){
        //  tmp.forEach(function(el){
        //    if(el.toString() == element[0]) 
        //      //console.log(el.toString() + ' ' + element[1]);
        //  });
        //  tmp.push(parseInt(element[0],10));
        //});
        //console.log(data['563626']);
        //console.log(data.sort(function(a,b){return a-b}));
      });
    },
    drawPolygons : function()
    {
      // state polygon data from http://econym.org.uk/gmap/states.xml
      var tmpArray = [];
      console.log(Census.settings.polygonData);
      $.each(Census.settings.polygonData,function(key,value)
      { 
        value.forEach(function(el)
        {
          tmpArray.push(new google.maps.LatLng(el[0],el[1]));
        });
        Census.map.Polygon = new google.maps.Polygon(
        {
          paths: tmpArray,
          strokeColor: "#000000",
          strokeOpacity: 0.8,
          strokeWeight: .5,
          fillColor: '#'+Math.floor(Math.random()*16777215).toString(16),
          fillOpacity: 0.65
        });
        Census.map.Polygon.setMap(Census.map);
        tmpArray = [];
      });
    }
  };
  $.fn.Census = function(method)
  {
    if (Census.methods[method])
      return Census.methods[ method ].apply( this, Array.prototype.slice.call(arguments,1));
    else if (typeof method === 'object' || ! method)
      return Census.methods.init.apply(this,arguments);
    else
      $.error('Method ' +  method + ' does not exist on jQuery.Census');

    // how to maintain chainability??
    return this.each(function(){
    });
  }
})(jQuery);
