// フェードイン
function fadeIn(){ 
  // フェードアップ 
  $('.fadeUpTrigger').each(function(){  // fadeUpTriggerクラスの各要素に対して 
    let scroll = $(window).scrollTop();  // スクロール位置を取得する 
    let triTop = $(this).offset().top + 100;  // 要素の上部より100px下の位置を取得 
    let winHeight = $(window).height();  // ウィンドウの高さを取得 
    if (scroll >= triTop - winHeight){  // 画面内に要素が入ったかを判断 
      $(this).addClass('fadeUp');  // fadeUpクラスを付与 
    } else { 
      $(this).removeClass('fadeUp');  // fadeUpクラスを削除 
    } 
  }); 
  

  // クロスフェード
  $('.fadeCrossTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeCross');
    } else {
      $(this).removeClass('fadeCross');
    }
  });

  } 

  $(window).scroll(function () {  // スクロールしたら 
  fadeIn();  // 関数を実行 
  });


 // ハンバーガーメニュー
  $(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});