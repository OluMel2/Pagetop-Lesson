//スライドショー作成用の「Swiper」の使い方
//ここでのSwiperはjQuery不要のJavaScriptのプラグインになる。
//プラグインをインターネットで検索するとたくさん出てきて、jQueryのプラグインもたくさん出てきますが、jQueryのプラグインはjQueryが導入されていることが前提となります。


//「Swiper」でスライドショーを作成する
//Swiperの導入方法はいくつか存在しますが、今回は手軽に導入ができるCDNによる実装とします
//CDN（コンテンツデリバリーネットワーク）による導入とは、ウェブコンテンツ（ファイルなど）をインターネット経由で読み込みます

const swiper = new Swiper('.swiper', {
  //オプションの設定
  loop: true, //最後までスライドしたら最初の画像に戻る

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  }
});