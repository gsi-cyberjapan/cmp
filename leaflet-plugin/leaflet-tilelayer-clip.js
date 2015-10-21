(function(window) {

	L.TileLayer.Clip = L.TileLayer.extend({
		options : {
			clip : L.bounds([ 0, 0 ], [ 640, 480 ])
		},
		update : function() {
			if (!this._map)
				return this;
			var e = this.getContainer();
			var p = this._map.containerPointToLayerPoint(this.options.clip.min);
			var q = this._map.containerPointToLayerPoint(this.options.clip.max);
			e.style["overflow"] = "hidden";
			e.style["left"] = p.x + "px";
			e.style["top"] = p.y + "px";
			e.style["width"] = (q.x - p.x) + "px";
			e.style["height"] = (q.y - p.y) + "px";
			for (var f = e.firstChild; f; f = f.nextSibling) {
				if (f.style) {
					f.style["margin-top"] = (-p.y) + "px";
					f.style["margin-left"] = (-p.x) + "px";
				}
			}
			return this;
		},
		onRemove : function(map) {
			this._map = null;
			L.TileLayer.prototype.onRemove.call(this, map);
			map.off("move", this.update, this);
		},
		onAdd : function(map) {
			this._map = map;
			L.TileLayer.prototype.onAdd.call(this, map);
			map.on("move", this.update, this);
			this.update();
		},
		setClip : function(a) {
			this.options.clip = a;
			this.update();
			return this;
		}
	});
	L.tileLayer.clip = function(url, options) {
		return new L.TileLayer.Clip(url, options);
	};
})(window);
