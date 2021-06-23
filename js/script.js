
$(function(){

    // ハンバーガーメニューボタン押下イベント
    $("#menu").click(function(){
        var menuBar = $(this).find(".menuBar");

        // ハンバーガーアイコン⇔バツアイコンの切り替え
        if(menuBar.hasClass("fa-bars")){
            menuBar.removeClass("fa-bars");
            menuBar.toggleClass("fa-times");

        }else{
            menuBar.removeClass("fa-times");
            menuBar.toggleClass("fa-bars");
        }

        //ナビゲーションが開くCSS適用
        $('.nav_menu').toggleClass('open'); 

        //ハンバーガーメニューを開いたときにスクロールしない
        $('body').toggleClass('noscroll'); 

        //ナビゲーション以外の背景をマスク
        $('.burger-musk').fadeToggle(300); 
        
    });

    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        let speed = 400; // ミリ秒で記述
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});