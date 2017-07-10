# cmp: 正射画像の比較

## ページ一覧（平成27年9月関東・東北豪雨）
各地区のhtmlは、パラメータ付きのindex.htmlへのリダイレクトを記載したものです。
- [常総地区](http://gsi-cyberjapan.github.io/cmp/joso.html)
- [大崎地区](http://gsi-cyberjapan.github.io/cmp/ohsaki.html)
  - [大崎地区渋井川](http://gsi-cyberjapan.github.io/cmp/shibui.html)
  - [大崎地区吉田川](http://gsi-cyberjapan.github.io/cmp/yoshida.html)
- [鹿沼地区](http://gsi-cyberjapan.github.io/cmp/kanuma.html)
- [結城地区](http://gsi-cyberjapan.github.io/cmp/yuki.html)

## 操作説明
![操作説明](op.png)

## 運用担当者向け運用指針
1. index.htmlまたはindex2.htmlの後ろにつけるURLパラメータを変更することで、比較するレイヤを変更できます。

2. index.htmlまたはindex2.htmlの中に、参照するlayers.txtが記載されています（46行目付近）。  
新たなlayers.txtにあるレイヤを参照する場合は、そのlayers.txtを当該箇所に追記する必要があります。

3. index2.htmlは、背景として標準地図が表示されます。  
    - URLパラメータは下記の通りです。
      - rl：右側のレイヤのタイルID。画像タイルに対応。必須。
      - ll：左側のレイヤのタイルID。画像タイルに対応。必須。
      - ovl：上乗せレイヤのタイルID。画像タイル、ベクトルタイルに対応。複数指定可能(","区切り)。任意。
      - lat：初期表示の緯度。必須。
      - lng：初期表示の経度。必須。
      - z：初期表示のズームレベル。必須。
      - rattr：右側のレイヤの説明。任意。
      - lattr：左側のレイヤの説明。任意。

    - URL例：
      - http://maps.gsi.go.jp/cmp/index2.html?rl=seamlessphoto&ll=20170705typhoon3_0708dol4&ovl=experimental_anno&lat=33.38397&lng=130.78443&z=16&rattr=全国最新写真（シームレス）&lattr=朝倉市杷木志波平榎地区（7/8撮影）#17/33.38397/130.78443
      - http://gsi-cyberjapan.github.io/cmp/?rl=ort&ll=std&ovl=experimental_anno,experimental_railcl&lat=35.6993&lng=139.9873&z=16&rattr=電子地形図(オルソ)&lattr=標準地図
      - ※ rattr、lattrが日本語の場合は、URLエンコードするとよいかもしれません。

4. index.htmlは、右側のレイヤが左側のレイヤの背景となります。  
    - URLパラメータはindex2.htmlのものと同じです。
    - URL例：
      - http://maps.gsi.go.jp/cmp/index2.html?rl=seamlessphoto&ll=20170705typhoon3_0708dol4&ovl=experimental_anno&lat=33.38397&lng=130.78443&z=16&rattr=全国最新写真（シームレス）&lattr=朝倉市杷木志波平榎地区（7/8撮影）#17/33.38397/130.78443
