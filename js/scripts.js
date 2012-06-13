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

    CensusDataMap.AlaskaCoords = [
      new google.maps.LatLng(70.0187,-141.0205),
      new google.maps.LatLng(70.1292,-141.7291),
      new google.maps.LatLng(70.4515,-144.8163),
      new google.maps.LatLng(70.7471,-148.4583),
      new google.maps.LatLng(70.7923,-151.1609),
      new google.maps.LatLng(71.1470,-152.6221),
      new google.maps.LatLng(71.1185,-153.9954),
      new google.maps.LatLng(71.4307,-154.8853),
      new google.maps.LatLng(71.5232,-156.7529),
      new google.maps.LatLng(71.2796,-157.9449),
      new google.maps.LatLng(71.2249,-159.6313),
      new google.maps.LatLng(70.6363,-161.8671),
      new google.maps.LatLng(70.0843,-163.5809),
      new google.maps.LatLng(69.3028,-165.2399),
      new google.maps.LatLng(69.1782,-166.8768),
      new google.maps.LatLng(68.3344,-168.0414),
      new google.maps.LatLng(67.6844,-165.9155),
      new google.maps.LatLng(67.2933,-164.6082),
      new google.maps.LatLng(66.7789,-164.0149),
      new google.maps.LatLng(66.5810,-165.7507),
      new google.maps.LatLng(66.2867,-167.5745),
      new google.maps.LatLng(66.0269,-168.9862),
      new google.maps.LatLng(65.4970,-168.9478),
      new google.maps.LatLng(65.0420,-167.4756),
      new google.maps.LatLng(64.3922,-167.0142),
      new google.maps.LatLng(64.0554,-165.7343),
      new google.maps.LatLng(64.0193,-163.2294),
      new google.maps.LatLng(63.9615,-162.1143),
      new google.maps.LatLng(63.6877,-163.6029),
      new google.maps.LatLng(63.4530,-165.3717),
      new google.maps.LatLng(62.4133,-166.3715),
      new google.maps.LatLng(61.6534,-166.9867),
      new google.maps.LatLng(60.8556,-166.4429),
      new google.maps.LatLng(60.5357,-167.8381),
      new google.maps.LatLng(59.5482,-167.7118),
      new google.maps.LatLng(59.4115,-165.8002),
      new google.maps.LatLng(59.3696,-164.5972),
      new google.maps.LatLng(59.1168,-162.8558),
      new google.maps.LatLng(58.1185,-162.5427),
      new google.maps.LatLng(58.1359,-160.6421),
      new google.maps.LatLng(58.0285,-159.5050),
      new google.maps.LatLng(57.6336,-158.8953),
      new google.maps.LatLng(56.9090,-159.9060),
      new google.maps.LatLng(56.3926,-160.6531),
      new google.maps.LatLng(56.2342,-161.8835),
      new google.maps.LatLng(55.7240,-162.9822),
      new google.maps.LatLng(55.2478,-164.3994),
      new google.maps.LatLng(54.7753,-165.3168),
      new google.maps.LatLng(54.1463,-167.1075),
      new google.maps.LatLng(53.5632,-168.5852),
      new google.maps.LatLng(53.1402,-169.9146),
      new google.maps.LatLng(52.5964,-169.5959),
      new google.maps.LatLng(52.9089,-168.2227),
      new google.maps.LatLng(54.2139,-162.7734),
      new google.maps.LatLng(54.6786,-159.1452),
      new google.maps.LatLng(55.6567,-155.4634),
      new google.maps.LatLng(57.3510,-152.1400),
      new google.maps.LatLng(59.2209,-150.8203),
      new google.maps.LatLng(59.7695,-147.4461),
      new google.maps.LatLng(60.3521,-145.9850),
      new google.maps.LatLng(59.8917,-144.1544),
      new google.maps.LatLng(59.8172,-141.6811),
      new google.maps.LatLng(59.5225,-140.5124),
      new google.maps.LatLng(59.0292,-138.8548),
      new google.maps.LatLng(57.9032,-136.8526),
      new google.maps.LatLng(56.9157,-136.0725),
      new google.maps.LatLng(56.1555,-134.9794),
      new google.maps.LatLng(55.3237,-134.0057),
      new google.maps.LatLng(54.6341,-133.6418),
      new google.maps.LatLng(54.7135,-130.6261),
      new google.maps.LatLng(55.2869,-129.9930),
      new google.maps.LatLng(55.9869,-130.0108),
      new google.maps.LatLng(56.1057,-130.1083),
      new google.maps.LatLng(56.6086,-131.5887),
      new google.maps.LatLng(57.8404,-132.8755),
      new google.maps.LatLng(58.7276,-133.8423),
      new google.maps.LatLng(59.3108,-134.9121),
      new google.maps.LatLng(59.8020,-135.4724),
      new google.maps.LatLng(59.6039,-136.3445),
      new google.maps.LatLng(59.1619,-136.8251),
      new google.maps.LatLng(59.2441,-137.6079),
      new google.maps.LatLng(60.0902,-139.2119),
      new google.maps.LatLng(60.3575,-139.0938),
      new google.maps.LatLng(60.1866,-140.0056),
      new google.maps.LatLng(60.3059,-140.9999),
      new google.maps.LatLng(70.0187,-141.0205)
    ];

    CensusDataMap.AlabamaCoords = [
    new google.maps.LatLng(35.0041,-88.1955),
    new google.maps.LatLng(34.9918,-85.6068),
    new google.maps.LatLng(32.8404,-85.1756),
    new google.maps.LatLng(32.2593,-84.8927),
    new google.maps.LatLng(32.1535,-85.0342),
    new google.maps.LatLng(31.7947,-85.1358),
    new google.maps.LatLng(31.5200,-85.0438),
    new google.maps.LatLng(31.3384,-85.0836),
    new google.maps.LatLng(31.2093,-85.1070),
    new google.maps.LatLng(31.0023,-84.9944),
    new google.maps.LatLng(30.9953,-87.6009),
    new google.maps.LatLng(30.9423,-87.5926),
    new google.maps.LatLng(30.8539,-87.6256),
    new google.maps.LatLng(30.6745,-87.4072),
    new google.maps.LatLng(30.4404,-87.3688),
    new google.maps.LatLng(30.1463,-87.5240),
    new google.maps.LatLng(30.1546,-88.3864),
    new google.maps.LatLng(31.8939,-88.4743),
    new google.maps.LatLng(34.8938,-88.1021),
    new google.maps.LatLng(34.9479,-88.1721),
    new google.maps.LatLng(34.9107,-88.1461)
    ];

    CensusDataMap.Alabama = new google.maps.Polygon({
      paths: CensusDataMap.AlabamaCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.Alabama.setMap(CensusDataMap.map);

    CensusDataMap.ArkansasCoords = [
      new google.maps.LatLng(33.0225,-94.0416),
      new google.maps.LatLng(33.0075,-91.2057),
      new google.maps.LatLng(33.1180,-91.1989),
      new google.maps.LatLng(33.1824,-91.1041),
      new google.maps.LatLng(33.3053,-91.1343),
      new google.maps.LatLng(33.4211,-91.1646),
      new google.maps.LatLng(33.4337,-91.2263),
      new google.maps.LatLng(33.5403,-91.2524),
      new google.maps.LatLng(33.6112,-91.1797),
      new google.maps.LatLng(33.6855,-91.2524),
      new google.maps.LatLng(33.6946,-91.1261),
      new google.maps.LatLng(33.7883,-91.1412),
      new google.maps.LatLng(33.7700,-91.0451),
      new google.maps.LatLng(33.8328,-91.0341),
      new google.maps.LatLng(33.9399,-91.0863),
      new google.maps.LatLng(34.0208,-90.9256),
      new google.maps.LatLng(34.0856,-90.9036),
      new google.maps.LatLng(34.1345,-90.9586),
      new google.maps.LatLng(34.1675,-90.9132),
      new google.maps.LatLng(34.1380,-90.8501),
      new google.maps.LatLng(34.2311,-90.9325),
      new google.maps.LatLng(34.3446,-90.6935),
      new google.maps.LatLng(34.4409,-90.5603),
      new google.maps.LatLng(34.5348,-90.5548),
      new google.maps.LatLng(34.5959,-90.5768),
      new google.maps.LatLng(34.7213,-90.5301),
      new google.maps.LatLng(34.7574,-90.5328),
      new google.maps.LatLng(34.8780,-90.4546),
      new google.maps.LatLng(34.8454,-90.3529),
      new google.maps.LatLng(34.8690,-90.2911),
      new google.maps.LatLng(35.0255,-90.3104),
      new google.maps.LatLng(35.1154,-90.2843),
      new google.maps.LatLng(35.1323,-90.1772),
      new google.maps.LatLng(35.1985,-90.1112),
      new google.maps.LatLng(35.2826,-90.1524),
      new google.maps.LatLng(35.4383,-90.1332),
      new google.maps.LatLng(35.5579,-90.0206),
      new google.maps.LatLng(35.6740,-89.9780),
      new google.maps.LatLng(35.7287,-89.9547),
      new google.maps.LatLng(35.9169,-89.6594),
      new google.maps.LatLng(35.9658,-89.6883),
      new google.maps.LatLng(36.0013,-89.7130),
      new google.maps.LatLng(35.9958,-90.3735),
      new google.maps.LatLng(36.1268,-90.2664),
      new google.maps.LatLng(36.2875,-90.0934),
      new google.maps.LatLng(36.3892,-90.0742),
      new google.maps.LatLng(36.4180,-90.1511),
      new google.maps.LatLng(36.4997,-90.1566),
      new google.maps.LatLng(36.4986,-94.6198),
      new google.maps.LatLng(35.3801,-94.4412),
      new google.maps.LatLng(33.6318,-94.4893),
      new google.maps.LatLng(33.6421,-94.4522),
      new google.maps.LatLng(33.5597,-94.4000),
      new google.maps.LatLng(33.5883,-94.2462),
      new google.maps.LatLng(33.5872,-94.1885),
      new google.maps.LatLng(33.5345,-94.0375),
      new google.maps.LatLng(33.4314,-94.0430),
      new google.maps.LatLng(33.0213,-94.0430)
    ];

    CensusDataMap.Arkansas = new google.maps.Polygon({
      paths: CensusDataMap.ArkansasCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.Arkansas.setMap(CensusDataMap.map);

    CensusDataMap.ArizonaCoords = [
      new google.maps.LatLng(36.9993,-112.5989),
      new google.maps.LatLng(37.0004,-110.8630),
      new google.maps.LatLng(37.0004,-109.0475),
      new google.maps.LatLng(31.3325,-109.0503),
      new google.maps.LatLng(31.3325,-111.0718),
      new google.maps.LatLng(32.4935,-114.8126),
      new google.maps.LatLng(32.5184,-114.8099),
      new google.maps.LatLng(32.5827,-114.8044),
      new google.maps.LatLng(32.6246,-114.7992),
      new google.maps.LatLng(32.6700,-114.7474),
      new google.maps.LatLng(32.7457,-114.7014),
      new google.maps.LatLng(32.7342,-114.6176),
      new google.maps.LatLng(32.7422,-114.5819),
      new google.maps.LatLng(32.7584,-114.5393),
      new google.maps.LatLng(32.8167,-114.5095),
      new google.maps.LatLng(32.8450,-114.4696),
      new google.maps.LatLng(32.9107,-114.4817),
      new google.maps.LatLng(32.9741,-114.4803),
      new google.maps.LatLng(33.0317,-114.5256),
      new google.maps.LatLng(33.0259,-114.6094),
      new google.maps.LatLng(33.0317,-114.6588),
      new google.maps.LatLng(33.0904,-114.7096),
      new google.maps.LatLng(33.2065,-114.6849),
      new google.maps.LatLng(33.2846,-114.7220),
      new google.maps.LatLng(33.3546,-114.6973),
      new google.maps.LatLng(33.4051,-114.7258),
      new google.maps.LatLng(33.4120,-114.6533),
      new google.maps.LatLng(33.5016,-114.5888),
      new google.maps.LatLng(33.5317,-114.5599),
      new google.maps.LatLng(33.6306,-114.5187),
      new google.maps.LatLng(33.6786,-114.5297),
      new google.maps.LatLng(33.7083,-114.4940),
      new google.maps.LatLng(33.7609,-114.5036),
      new google.maps.LatLng(33.8157,-114.5284),
      new google.maps.LatLng(33.8545,-114.5325),
      new google.maps.LatLng(33.9285,-114.5380),
      new google.maps.LatLng(33.9530,-114.5235),
      new google.maps.LatLng(34.0049,-114.4748),
      new google.maps.LatLng(34.0299,-114.4308),
      new google.maps.LatLng(34.0891,-114.4363),
      new google.maps.LatLng(34.1357,-114.3526),
      new google.maps.LatLng(34.1720,-114.2908),
      new google.maps.LatLng(34.2044,-114.2255),
      new google.maps.LatLng(34.2595,-114.1685),
      new google.maps.LatLng(34.2572,-114.1301),
      new google.maps.LatLng(34.3037,-114.1397),
      new google.maps.LatLng(34.3664,-114.2276),
      new google.maps.LatLng(34.4012,-114.2633),
      new google.maps.LatLng(34.4534,-114.3388),
      new google.maps.LatLng(34.4930,-114.3608),
      new google.maps.LatLng(34.5292,-114.3811),
      new google.maps.LatLng(34.5959,-114.4377),
      new google.maps.LatLng(34.6547,-114.4569),
      new google.maps.LatLng(34.7506,-114.5297),
      new google.maps.LatLng(34.8172,-114.5847),
      new google.maps.LatLng(34.8724,-114.6341),
      new google.maps.LatLng(34.9490,-114.6313),
      new google.maps.LatLng(35.0342,-114.6351),
      new google.maps.LatLng(35.1019,-114.6451),
      new google.maps.LatLng(35.1233,-114.6190),
      new google.maps.LatLng(35.1716,-114.5682),
      new google.maps.LatLng(35.3364,-114.5984),
      new google.maps.LatLng(35.4506,-114.6643),
      new google.maps.LatLng(35.5780,-114.6753),
      new google.maps.LatLng(35.6171,-114.6547),
      new google.maps.LatLng(35.6528,-114.6918),
      new google.maps.LatLng(35.7053,-114.7028),
      new google.maps.LatLng(35.8050,-114.7093),
      new google.maps.LatLng(35.8679,-114.6602),
      new google.maps.LatLng(35.9836,-114.7426),
      new google.maps.LatLng(36.0891,-114.7536),
      new google.maps.LatLng(36.1124,-114.6794),
      new google.maps.LatLng(36.1423,-114.6327),
      new google.maps.LatLng(36.1301,-114.4872),
      new google.maps.LatLng(36.1445,-114.3690),
      new google.maps.LatLng(36.0746,-114.3038),
      new google.maps.LatLng(36.0602,-114.3172),
      new google.maps.LatLng(36.0163,-114.2451),
      new google.maps.LatLng(36.0402,-114.1438),
      new google.maps.LatLng(36.0979,-114.1150),
      new google.maps.LatLng(36.1101,-114.1274),
      new google.maps.LatLng(36.1190,-114.1054),
      new google.maps.LatLng(36.1989,-114.0463),
      new google.maps.LatLng(36.3638,-114.0450),
      new google.maps.LatLng(37.0001,-114.0508)
    ];

    CensusDataMap.Arizona = new google.maps.Polygon({
      paths: CensusDataMap.ArizonaCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.Arizona.setMap(CensusDataMap.map);

    CensusDataMap.CaliforniaCoords = [
      new google.maps.LatLng(41.9983,-124.4009),
      new google.maps.LatLng(42.0024,-123.6237),
      new google.maps.LatLng(42.0126,-123.1526),
      new google.maps.LatLng(42.0075,-122.0073),
      new google.maps.LatLng(41.9962,-121.2369),
      new google.maps.LatLng(41.9983,-119.9982),
      new google.maps.LatLng(39.0021,-120.0037),
      new google.maps.LatLng(37.5555,-117.9575),
      new google.maps.LatLng(36.3594,-116.3699),
      new google.maps.LatLng(35.0075,-114.6368),
      new google.maps.LatLng(34.9659,-114.6382),
      new google.maps.LatLng(34.9107,-114.6286),
      new google.maps.LatLng(34.8758,-114.6382),
      new google.maps.LatLng(34.8454,-114.5970),
      new google.maps.LatLng(34.7890,-114.5682),
      new google.maps.LatLng(34.7269,-114.4968),
      new google.maps.LatLng(34.6648,-114.4501),
      new google.maps.LatLng(34.6581,-114.4597),
      new google.maps.LatLng(34.5869,-114.4322),
      new google.maps.LatLng(34.5235,-114.3787),
      new google.maps.LatLng(34.4601,-114.3869),
      new google.maps.LatLng(34.4500,-114.3361),
      new google.maps.LatLng(34.4375,-114.3031),
      new google.maps.LatLng(34.4024,-114.2674),
      new google.maps.LatLng(34.3559,-114.1864),
      new google.maps.LatLng(34.3049,-114.1383),
      new google.maps.LatLng(34.2561,-114.1315),
      new google.maps.LatLng(34.2595,-114.1651),
      new google.maps.LatLng(34.2044,-114.2249),
      new google.maps.LatLng(34.1914,-114.2221),
      new google.maps.LatLng(34.1720,-114.2908),
      new google.maps.LatLng(34.1368,-114.3237),
      new google.maps.LatLng(34.1186,-114.3622),
      new google.maps.LatLng(34.1118,-114.4089),
      new google.maps.LatLng(34.0856,-114.4363),
      new google.maps.LatLng(34.0276,-114.4336),
      new google.maps.LatLng(34.0117,-114.4652),
      new google.maps.LatLng(33.9582,-114.5119),
      new google.maps.LatLng(33.9308,-114.5366),
      new google.maps.LatLng(33.9058,-114.5091),
      new google.maps.LatLng(33.8613,-114.5256),
      new google.maps.LatLng(33.8248,-114.5215),
      new google.maps.LatLng(33.7597,-114.5050),
      new google.maps.LatLng(33.7083,-114.4940),
      new google.maps.LatLng(33.6832,-114.5284),
      new google.maps.LatLng(33.6363,-114.5242),
      new google.maps.LatLng(33.5895,-114.5393),
      new google.maps.LatLng(33.5528,-114.5242),
      new google.maps.LatLng(33.5311,-114.5586),
      new google.maps.LatLng(33.5070,-114.5778),
      new google.maps.LatLng(33.4418,-114.6245),
      new google.maps.LatLng(33.4142,-114.6506),
      new google.maps.LatLng(33.4039,-114.7055),
      new google.maps.LatLng(33.3546,-114.6973),
      new google.maps.LatLng(33.3041,-114.7302),
      new google.maps.LatLng(33.2858,-114.7206),
      new google.maps.LatLng(33.2754,-114.6808),
      new google.maps.LatLng(33.2582,-114.6698),
      new google.maps.LatLng(33.2467,-114.6904),
      new google.maps.LatLng(33.1720,-114.6794),
      new google.maps.LatLng(33.0904,-114.7083),
      new google.maps.LatLng(33.0858,-114.6918),
      new google.maps.LatLng(33.0328,-114.6629),
      new google.maps.LatLng(33.0501,-114.6451),
      new google.maps.LatLng(33.0305,-114.6286),
      new google.maps.LatLng(33.0282,-114.5888),
      new google.maps.LatLng(33.0351,-114.5750),
      new google.maps.LatLng(33.0328,-114.5174),
      new google.maps.LatLng(32.9718,-114.4913),
      new google.maps.LatLng(32.9764,-114.4775),
      new google.maps.LatLng(32.9372,-114.4844),
      new google.maps.LatLng(32.8427,-114.4679),
      new google.maps.LatLng(32.8161,-114.5091),
      new google.maps.LatLng(32.7850,-114.5311),
      new google.maps.LatLng(32.7573,-114.5284),
      new google.maps.LatLng(32.7503,-114.5641),
      new google.maps.LatLng(32.7353,-114.6162),
      new google.maps.LatLng(32.7480,-114.6986),
      new google.maps.LatLng(32.7191,-114.7220),
      new google.maps.LatLng(32.6868,-115.1944),
      new google.maps.LatLng(32.5121,-117.3395),
      new google.maps.LatLng(32.7838,-117.4823),
      new google.maps.LatLng(33.0501,-117.5977),
      new google.maps.LatLng(33.2341,-117.6814),
      new google.maps.LatLng(33.4578,-118.0591),
      new google.maps.LatLng(33.5403,-118.6290),
      new google.maps.LatLng(33.7928,-118.7073),
      new google.maps.LatLng(33.9582,-119.3706),
      new google.maps.LatLng(34.1925,-120.0050),
      new google.maps.LatLng(34.2561,-120.7164),
      new google.maps.LatLng(34.5360,-120.9128),
      new google.maps.LatLng(34.9749,-120.8427),
      new google.maps.LatLng(35.2131,-121.1325),
      new google.maps.LatLng(35.5255,-121.3220),
      new google.maps.LatLng(35.9691,-121.8013),
      new google.maps.LatLng(36.2808,-122.1446),
      new google.maps.LatLng(36.7268,-122.1721),
      new google.maps.LatLng(37.2227,-122.6871),
      new google.maps.LatLng(37.7783,-122.8903),
      new google.maps.LatLng(37.8965,-123.2378),
      new google.maps.LatLng(38.3449,-123.3202),
      new google.maps.LatLng(38.7423,-123.8338),
      new google.maps.LatLng(38.9946,-123.9793),
      new google.maps.LatLng(39.3088,-124.0329),
      new google.maps.LatLng(39.7642,-124.0823),
      new google.maps.LatLng(40.1663,-124.5314),
      new google.maps.LatLng(40.4658,-124.6509),
      new google.maps.LatLng(41.0110,-124.3144),
      new google.maps.LatLng(41.2386,-124.3419),
      new google.maps.LatLng(41.7170,-124.4545),
      new google.maps.LatLng(41.9983,-124.4009)
    ];

    CensusDataMap.California = new google.maps.Polygon({
      paths: CensusDataMap.CaliforniaCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.California.setMap(CensusDataMap.map);

    CensusDataMap.ColoradoCoords = [
      new google.maps.LatLng(37.0004,-109.0448),
      new google.maps.LatLng(36.9949,-102.0424),
      new google.maps.LatLng(41.0006,-102.0534),
      new google.maps.LatLng(40.9996,-109.0489),
      new google.maps.LatLng(37.0004,-109.0448)
    ];

    CensusDataMap.Colorado = new google.maps.Polygon({
      paths: CensusDataMap.ColoradoCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.Colorado.setMap(CensusDataMap.map);

    CensusDataMap.ConnecticutCoords = [
      new google.maps.LatLng(42.0498,-73.4875),
      new google.maps.LatLng(42.0511,-73.4247),
      new google.maps.LatLng(42.0371,-72.8146),
      new google.maps.LatLng(41.9983,-72.8174),
      new google.maps.LatLng(42.0044,-72.7638),
      new google.maps.LatLng(42.0360,-72.7563),
      new google.maps.LatLng(42.0368,-72.6945),
      new google.maps.LatLng(42.0309,-72.6086),
      new google.maps.LatLng(42.0269,-72.6059),
      new google.maps.LatLng(42.0269,-72.5784),
      new google.maps.LatLng(42.0350,-72.5729),
      new google.maps.LatLng(42.0350,-72.4026),
      new google.maps.LatLng(42.0248,-71.7984),
      new google.maps.LatLng(41.6832,-71.7874),
      new google.maps.LatLng(41.4165,-71.7984),
      new google.maps.LatLng(41.3892,-71.8341),
      new google.maps.LatLng(41.3273,-71.8526),
      new google.maps.LatLng(41.3309,-71.8938),
      new google.maps.LatLng(41.3103,-71.9302),
      new google.maps.LatLng(41.2907,-72.0195),
      new google.maps.LatLng(41.2618,-72.0827),
      new google.maps.LatLng(41.1962,-72.4322),
      new google.maps.LatLng(41.0866,-73.0007),
      new google.maps.LatLng(41.0255,-73.2493),
      new google.maps.LatLng(40.9509,-73.6132),
      new google.maps.LatLng(40.9830,-73.6606),
      new google.maps.LatLng(41.0338,-73.6723),
      new google.maps.LatLng(41.1011,-73.7272),
      new google.maps.LatLng(41.2153,-73.4834),
      new google.maps.LatLng(41.2953,-73.5507),
      new google.maps.LatLng(41.4906,-73.5329),
      new google.maps.LatLng(42.0493,-73.4875)
    ];

    CensusDataMap.Connecticut = new google.maps.Polygon({
      paths: CensusDataMap.ConnecticutCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    CensusDataMap.Connecticut.setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);

    //CensusDataMap.Coords = [
    //];

    //CensusDataMap. = new google.maps.Polygon({
    //  paths: CensusDataMap.Coords,
    //  strokeColor: "#FF0000",
    //  strokeOpacity: 0.8,
    //  strokeWeight: 2,
    //  fillColor: "#FF0000",
    //  fillOpacity: 0.35
    //});
    //CensusDataMap..setMap(CensusDataMap.map);
  }

  //$.get('http://thedataweb.rm.census.gov/data/2010/sf1?key=7e31eccb17cd6e08aa9e8237b5e496dfee744176&get=P0010001,NAME&for=state:*', function(data) {
  //  data.shift();
  //  data.pop();
  //  data.forEach(function(element){
  //  //console.log(element);
  //  });
  //});

  CensusDataMap.drawMap();
});
