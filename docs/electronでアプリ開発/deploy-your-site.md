---
sidebar_position: 5
---

# ビルド

アプリが完成したら、ビルドしましょう。

## exeファイル作成
```
npm run make
```

これでoutフォルダにexeファイルが作成されます。

## インストーラー作成

electron-builderをインストールします。

```
npm install electron-builder
```
インストールしたら、ビルドします。

```
npx electron-builder --win --x64
```

今回はwin向けにビルドしてみます。

ビルドオプションは[こちら](https://www.electron.build/)を参考にしてください。

処理が完了すると、distフォルダにインストーラーが作成されます。

実行するとインストールできます。（あたりまえ体操）