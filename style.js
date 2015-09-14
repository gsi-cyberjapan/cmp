{
options:
{
  attribution: '注記',minZoom: 15,maxNativeZoom: 15, maxZoom: 18
},
geojsonOptions:
{
         pointToLayer: function(feature, latlng) {

var annoproperties = {
"class":"クラス名",
"rID":"レコード ID",
"lfSpanFr":"整備データ登録日",
"lfSpanTo":"整備データ削除日",
"tmpFlg":"暫定フラグ",
"orgGILvl":"出典地理情報レベル",
"ftCode":"地物種別コード",
"admCode":"行政コード",
"devDate":"整備完了日",
"annoCtg":"注記分類",
"knj":"漢字",
"kana":"読み",
"arrng":"字列",
"arrngAgl":"配置角度",
"repPt":"代表点表示",
"gaiji":"外字フラグ",
"noChar":"総文字数",
"charG1":"文字グループ1",
"charG2":"文字グループ2",
"charG3":"文字グループ3",
"charG4":"文字グループ4",
"charG5":"文字グループ5",
"charG6":"文字グループ6",
"charG7":"文字グループ7",
"charG8":"文字グループ8",
"charG9":"文字グループ9",
"charG10":"文字グループ10",
"charG11":"文字グループ11",
"charG12":"文字グループ12",
"charG13":"文字グループ13",
"charG14":"文字グループ14",
"charG15":"文字グループ15",
"charG16":"文字グループ16",
"charG17":"文字グループ17",
"charG18":"文字グループ18",
"charG19":"文字グループ19",
"charG20":"文字グループ20",
"charG21":"文字グループ21",
"charG22":"文字グループ22"
};

var annostyle = {
"行政区画（市区町村）": {"size": 32.5,"color": "#000000"},
"行政区画（飛び地）": {"size": 18.8,"color": "#000000"},
"居住地名（町字名）": {"size": 13.8,"color": "#000000"},
"居住地名（通称）": {"size": 13.8,"color": "#000000"},
"山地（山の総称）": {"size": 32.5,"color": "#000000"},
"山地（山、岳、峰等）": {"size": 20.0,"color": "#000000"},
"山地（尖峰、丘、塚等）": {"size": 15.0,"color": "#000000"},
"河川、湖沼（湖、沼、池等）": {"size": 15.0,"color": "#0000ff"},
"河川、湖沼（河川、用水等）": {"size": 15.0,"color": "#0000ff"},
"河川、湖沼（沢、谷、滝等）": {"size": 15.0,"color": "#0000ff"},
"陸域自然地名（高原、森等）": {"size": 15.0,"color": "#000000"},
"陸域自然地名（岩、温泉等）": {"size": 15.0,"color": "#000000"},
"海域、海岸地形（海、湾等）": {"size": 15.0,"color": "#0000ff"},
"海域、海岸地形（海岸、浜等）": {"size": 15.0,"color": "#0000ff"},
"海域、海岸地形（岬、磯等）": {"size": 15.0,"color": "#000000"},
"島（群島、列島等）": {"size": 15.0,"color": "#000000"},
"島（島）": {"size": 15.0,"color": "#000000"},
"島（はえ、岩礁等）": {"size": 15.0,"color": "#000000"},
"陸上交通施設（道路名）": {"size": 17.5,"color": "#005a3c"},
"陸上交通施設（道路施設）": {"size": 15.0,"color": "#005a3c"},
"陸上交通施設（道路構造物）": {"size": 13.8,"color": "#005a3c"},
"陸上交通施設（鉄道路線名）": {"size": 20.0,"color": "#005a3c"},
"陸上交通施設（鉄道駅名）": {"size": 15.0,"color": "#005a3c"},
"陸上交通施設（鉄道構造物）": {"size": 15.0,"color": "#005a3c"},
"海上交通施設（港湾）": {"size": 15.0,"color": "#005a3c"},
"海上交通施設（港湾施設）": {"size": 15.0,"color": "#005a3c"},
"航空交通施設（空港名）": {"size": 15.0,"color": "#005a3c"},
"構造物（高塔、煙突等）": {"size": 15.0,"color": "#000000"},
"構造物（ダム）": {"size": 15.0,"color": "#0000ff"},
"構造物（せき）": {"size": 15.0,"color": "#0000ff"},
"構造物（水門、堤防）": {"size": 15.0,"color": "#0000ff"},
"土地利用（演習場、ゴルフ場等）": {"size": 15.0,"color": "#000000"},
"土地利用（史跡名勝天然記念物）": {"size": 15.0,"color": "#000000"},
"土地利用（漁港）": {"size": 15.0,"color": "#000000"},
"土地利用（公園）": {"size": 15.0,"color": "#000000"},
"建物（合同庁舎）": {"size": 13.8,"color": "#000000"},
"建物（国の機関）": {"size": 13.8,"color": "#000000"},
"建物（矯正施設）": {"size": 13.8,"color": "#000000"},
"建物（自衛隊、米軍）": {"size": 13.8,"color": "#000000"},
"建物（県庁）": {"size": 13.8,"color": "#000000"},
"建物（大学、大学院）": {"size": 13.8,"color": "#000000"},
"建物（短期大学）": {"size": 13.8,"color": "#000000"},
"建物（高等専門学校）": {"size": 13.8,"color": "#000000"},
"建物（特殊学校）": {"size": 13.8,"color": "#000000"},
"建物（水族館、動植物園）": {"size": 13.8,"color": "#000000"},
"建物（発電所）": {"size": 13.8,"color": "#000000"},
"建物（料金所）": {"size": 13.8,"color": "#000000"},
"建物（神社）": {"size": 13.8,"color": "#000000"},
"建物（寺院）": {"size": 13.8,"color": "#000000"},
"建物（商業施設）": {"size": 13.8,"color": "#000000"},
"建物（高層施設）": {"size": 13.8,"color": "#000000"},
"建物（文教施設）": {"size": 13.8,"color": "#000000"},
"建物（その他）": {"size": 13.8,"color": "#000000"},
"その他（ふりがな）": {"size": 10.0,"color": "#000000"},
"その他（鉱山の鉱種名）": {"size": 11.3,"color": "#000000"},
"その他（その他）": {"size": 15.0,"color": "#000000"}
};

var zoomper = Math.pow(2,(GSI.GLOBALS.map.getZoom()-15));


           var kakudo= 0 - feature.properties['arrngAgl'];
           if(feature.properties['arrng']==1){
               var idstyle = "\""
               +"font-family:Meiryo, メイリオ, sans-serif;"
               +"font-size:"+annostyle[feature.properties['annoCtg']].size * zoomper+"px;"
               +"font-weight:bold;"
               +"color:"+annostyle[feature.properties['annoCtg']].color+";"
               +"text-shadow:-1px -1px #fff,1px -1px #fff,-1px 1px #fff,1px 1px #fff;"
               +"background-color:#fff0;"
               +"line-height:"+annostyle[feature.properties['annoCtg']].size * zoomper+"px;"
               +"white-space: nowrap;"
               +"-webkit-transform: rotate("+kakudo+"deg);"
               +"-moz-transform: rotate("+kakudo+"deg);"
               +"-o-transform: rotate("+kakudo+"deg);"
               +"-ms-transform: rotate("+kakudo+"deg);"
               +"transform: rotate("+kakudo+"deg);"
               +"transform-origin:left center;"
               +"\"";
               var annoanchor= [0, annostyle[feature.properties['annoCtg']].size * zoomper/2];
           }else{
               var idstyle = "\""
               +"font-family:Meiryo, メイリオ, sans-serif;"
               +"font-size:"+annostyle[feature.properties['annoCtg']].size * zoomper+"px;"
               +"font-weight:bold;"
               +"color:"+annostyle[feature.properties['annoCtg']].color+";"
               +"text-shadow:-1px -1px #fff,1px -1px #fff,-1px 1px #fff,1px 1px #fff;"
               +"background-color:#fff0;"
               +"line-height:"+annostyle[feature.properties['annoCtg']].size * zoomper+"px;"
               +"white-space: nowrap;"
               +"-webkit-transform: rotate("+kakudo+"deg);"
               +"-moz-transform: rotate("+kakudo+"deg);"
               +"-o-transform: rotate("+kakudo+"deg);"
               +"-ms-transform: rotate("+kakudo+"deg);"
               +"transform: rotate("+kakudo+"deg);"
               +"transform-origin:top center;"
               +"-ms-writing-mode:tb-rl;"
               +"-webkit-writing-mode:vertical-rl;"
               +"-moz-writing-mode: vertical-rl;"
               +"-o-writing-mode: vertical-rl;"
               +"writing-mode: vertical-rl;"
               +"\"";
               var annoanchor= [annostyle[feature.properties['annoCtg']].size * zoomper/2,0];
           }
           
           var mydivIcon= L.divIcon({
                           iconAnchor: annoanchor,
                           className: "gsi-div-icon", 
                           html: "<div style="+idstyle+">"+feature.properties['knj']+"</div>"});
           var s = '<div class="popup">';
           for(var k in feature.properties) {
             var v = feature.properties[k];
             if(v !== ""){s += annoproperties[k] + ': ' + v + '<br>';}
           }
           s += '</div>';
           var zdiv = L.marker(latlng, {icon: mydivIcon});
           return L.featureGroup([zdiv]);
         }
}
}
