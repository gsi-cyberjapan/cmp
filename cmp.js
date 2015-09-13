var clip = function() {
  var nw = map.containerPointToLayerPoint([0, 0]),
      se = map.containerPointToLayerPoint(map.getSize()),
      clipX = nw.x + (se.x - nw.x) * range.value;
  cmp.getContainer().style.clip =
    'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
}

var main_loop = function() {
  ort = L.tileLayer(BG_URL, {
    attribution: "国土地理院", maxNativeZoom: 18, maxZoom: 20
  });
  cmp = L.tileLayer(FG_URL, {
    attribution: "国土地理院", maxNativeZoom: 18, maxZoom: 20
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
}
