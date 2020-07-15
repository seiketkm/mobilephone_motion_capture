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
``` 
{"id":7118,"x":-0.14422807286642492,"y":-0.07735621140301227,"z":-0.12733224844932556}
{"id":7118,"x":0.1165332065373659,"y":-0.032573066824674604,"z":-0.41580899857878684}
...
```


`./data/accelerationIncludingGravity` 重力加速度を含む加速度の出力
```
{"id":7118,"x":0.759500782386586,"y":-5.955325869747996,"z":-8.205415996089577}
{"id":7118,"x":0.48686223738007245,"y":-6.017125031057,"z":-7.904944272261858}
...
```

`./data/deviceorientation` スマートフォンの向き
```
{"id":7118,"alpha":358.47204595154517,"beta":37.450314308680625,"gamma":4.505570965054503}
{"id":7118,"alpha":358.44344794165556,"beta":37.15351504911941,"gamma":4.718595685290769}
...
```

# 動作確認端末
iPhone8/iOS 13.5.1