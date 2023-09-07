//jQueryで「マウスクリック」イベントを設定する

$(function() {
  $('#back a').on('click',function(event){ //eventという名でなくても構いません。function(e)と、されることも多い
    // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      //animate() は、アニメーション効果を設定するjQueryの関数
      scrollTop:0
      //scrollTop は、スクロール位置を取得できるメソッド
      //「scrollTop:0」を指定しているので、「最上部に移動する」
    }, 800);
    //800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
    event.preventDefault();
    //event.preventDefault(); は、aタグの機能を無効にするメソッド
  });
});

//ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定されている。
//「body要素またはhtml要素」の意味になる。


//jQueryで「マウスクリック」イベントを設定する
//$('.セレクタ名').on('click', function(event) {
//  イベント発生時に行われる処理
//});

//「スクロールイベント」の記述例
//$('セレクタ名').animate({
//  変化対象のプロパティ名:変化値
//}, アニメーションの動作時間);