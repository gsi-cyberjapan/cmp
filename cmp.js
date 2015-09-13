var clip = function() {
  var nw = map.containerPointToLayerPoint([0, 0]),
      se = map.containerPointToLayerPoint(map.getSize()),
      clipX = nw.x + (se.x - nw.x) * range.value;
  cmp.getContainer().style.clip =
    'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
}

var main_loop = function() {
  gsimaps = 'http://maps.gsi.go.jp/?ll=' +
    LAT + ',' + LNG + '&z=16&base=std&cd=f2%2Ff2_6&vs=c1j0l0u0&d=l';
  attr = "<a href='" + gsimaps + "'>地理院地図</a>";
  ort = L.tileLayer(BG_URL, {
    attribution: attr, maxNativeZoom: 18, maxZoom: 20
  });
  cmp = L.tileLayer(FG_URL, {
    attribution: attr, maxNativeZoom: 18, maxZoom: 20
  });
  map = L.map('mapdiv', {
    center: [LAT, LNG], zoom: 16, minZoom: 10,
    layers: [ort, cmp], zoomControl: false});
  new L.Control.Zoom({ position: 'bottomright' }).addTo(map);
  var hash = L.hash(map);
  var range = document.getElementById('range');

  range['oninput' in range ? 'oninput' : 'onchange'] = clip;
  map.on('move', clip);
  clip();

  if(L.Browser.ie) {
    alert("Internet Explorerを用いた被災前後比較は現在準備中です。地理院地図に移動します");
    document.location.href = gsimaps;
  }
}
