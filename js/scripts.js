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

      var myOptions = {
        center: new google.maps.LatLng(Census.settings.latitude,Census.settings.longitude),
        zoom: Census.settings.zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      Census.map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    },
    queryAPI : function()
    {
      $.get('http://thedataweb.rm.census.gov/data/2010/' + Census.settings.dataset + '?key=' + Census.settings.key + '&get=' + Census.settings.name + ',NAME&for=state:' + Census.settings.state, function(data) {

        // The data comes back with the first array being useless so shift it off.
        data.shift();
        //console.log(data);
        var data_obj = {};
        var data_arr = [];
        data.forEach(function(m){
          data_obj[m[1]] = m[0];
          data_arr.push(parseInt(m[0],10));
        });

        var sorted_array = data_arr.sort(function(a,b){return a-b});
          console.log(data_obj);
          //console.log(data_arr);

        var data_object_props = Object.getOwnPropertyNames(data_obj);
        sorted_array.forEach(function(n){
          data_arr.forEach(function(o){
            
          });
          //console.log(n);
        });



        var tmp_values = [];
        var foo_values = [];
        tmp_values[0] = [];
        tmp_values[1] = [];

        var names = Object.getOwnPropertyNames(Census.settings.polygonData);
        names.forEach(function(el){
          data.forEach(function(e){
            if(e[1] == el)
            {
              foo_values.push(parseInt(e[0],10));
              tmp_values[0].push(parseInt(e[0],10));
              tmp_values[1].push(e[1]);
              Census.settings.polygonData[el].push(e[0]);
            }
          });
        });
        //var new_array = foo_values.sort(function(a,b){return a-b});
        //new_array.forEach(function(el){
        //  tmp_values[0].forEach(function(j){
        //    if(j[0] = el)
        //      console.log(el);
        //  });
        ////console.log(el);
        //});
        //console.log(foo_values.sort(function(a,b){return a-b}));
        //console.log(tmp_values);
      });
    },
    drawPolygons : function()
    {
      // state polygon data from http://econym.org.uk/gmap/states.xml
      var tmpArray = [];
      var names = Object.getOwnPropertyNames(Census.settings.polygonData);
      $.each(names,function(k,v){
        //console.log(Census.settings.polygonData[v].pop());
      });
     // console.log(Census.settings.polygonData);
      $.each(Census.settings.polygonData,function(key,value)
      { 
      //  console.log(value);
        value.forEach(function(el)
        {
          tmpArray.push(new google.maps.LatLng(el[0],el[1]));
        });
        Census.map.Polygon = new google.maps.Polygon(
        {
          paths: tmpArray,
          strokeColor: "#000000",
          strokeOpacity: 0.8,
          strokeWeight: 0.5,
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
  };
})(jQuery);
