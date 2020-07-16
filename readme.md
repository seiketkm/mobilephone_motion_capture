# これはなに
スマートフォンのセンサー情報（加速度、ジャイロ）から、以下の情報をファイルに出力します。

- deviceorientation
- acceleration
- accelerationIncludingGravity

参考:[端末画面の向きと端末のモーション](https://developers.google.com/web/fundamentals/native-hardware/device-orientation?hl=ja)

# つかいかた

```
git clone https://github.com/seiketkm/mobilephone_motion_capture
cd mobilephone_motion_capture
docker-compose up
```
以下のような出力が得られます。

```
app_1  | yarn run v1.22.4
app_1  | $ node index.js & lt -h https://serverless.social --port 3000
app_1  | listening on *:3000
app_1  | your url is: https://hogehoge.serverless.social
```

出力されたURLをスマートフォンのブラウザで開き、センサー情報へのアクセスを許可をすることでセンサー情報が `./data` に生成されます。

# 出力ファイル例

`./data/acceleration` 加速度の出力
format: uid x y z
``` 
876	-0.43128903791382905	1.1177414621591568	-0.3486848428547382
876	0.22957915548086166	1.0454086318761109	-1.8496470391988753
876	0.2651533403502777	1.6945558462083339	-3.753732940071821
...
```


`./data/accelerationIncludingGravity` 重力加速度を含む加速度の出力

format: uid x y z
```
876	-0.10339957734813214	-5.914724394768476	-8.264186164966224
876	0.18300678939819334	-5.956324233135581	-8.715792453113197
876	-0.48288054276618636	-6.0408694792598485	-7.051073526763916
...
```

`./data/deviceorientation` スマートフォンの向き
format: uid alpha beta gamma値
```
876	8.500776255947686	36.468017238738625	-2.0789825753878732
876	3.683342617186347	36.992422203803564	-1.801744153446909
876	2.694928502042917	37.05863225480523	-1.6456015514693285
...
```

# 動作確認端末
iPhone8/iOS 13.5.1