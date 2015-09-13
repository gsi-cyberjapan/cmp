$(function() {
  var gsimaps = 'http://maps.gsi.go.jp/?ll=' +
    LAT + ',' + LNG + '&z=16&base=std&cd=f2%2Ff2_6&vs=c1j0l0u0&d=l';
  var attr = "<a target='cmp_gsimaps' href='" + gsimaps + "'>地理院地図</a>";

  var master = L.map('master', {
    center : [ LAT, LNG ], zoom : 16, minZoom : 10,
    layers : [ L.tileLayer(BG_URL, {
      attribution : attr, maxNativeZoom : 18, maxZoom : 20
    }) ],
    zoomControl : false, attributionControl: false, inertia : false
  });
  var slave = L.map('slave', {
    center : [ LAT, LNG ], zoom : 16, minZoom : 10,
    layers : [ L.tileLayer(FG_URL, {
      attribution : attr, maxNativeZoom : 18, maxZoom : 20
    }) ],
    zoomControl : false, attributionControl : false
  });
  L.control.attribution({
    position: 'bottomright',
    prefix: "<a target='cmp_usage' href='http://gsi-cyberjapan.github.io/cmp/op.png'>使い方</a>"
  }).addTo(master);
  L.control.zoom({position : 'bottomright'}).addTo(master);
  L.hash(master);

  master.on("move", function() {
    slave.setView(master.getCenter(), master.getZoom(), {animate : false});
  });

  $("#slider").slider({
    "value" : 50,
    "slide" : function(event, ui) {
      $("#slave").css("width", ui.value + "%");
    }
  });

  $("#slave").css("width", "50%");
  $(window).on("resize", function() {
    location.reload();
  });
});
