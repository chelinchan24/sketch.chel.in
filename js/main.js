var isLoading = true;

var yearsUntil = '';
var monthsUntil = '';

$(window).load(function() {
    isLoading = false;
    setTimeout('loadingOut()', 1000);
    autoAnimations()
});

function loadingOut() {
    $("#讀取").addClass("讀取_離開")
}

/* 動畫 */
var scrollFadeIn = $('.動畫-捲動進入');
var windowBottom = $(window).scrollTop() + $(window).height();

//自動動畫
function autoAnimations() {
    $(".動畫-淡入").addClass('動畫-淡入_執行');

    scrollFadeIn.each(function (i) {
        if ($(this).offset().top < windowBottom) {
            $(this).addClass('動畫-捲動進入_執行');
            // $(this).css("transition-delay", "0.5s")
        }
    })
}

//捲動動畫
$(window).scroll(function() {
    scrollFadeIn.each( function(i) {
        var itemBoxBottom = $(this).offset().top + $(this).scrollTop();
        var windowBottom = $(window).scrollTop() + window.innerHeight;
        var itemBoxTop = $(this).offset().top - $(window).scrollTop();

        //動畫進入
        if( windowBottom - 30 > itemBoxBottom ){
            $(this).addClass('動畫-捲動進入_執行');
        }
    });

    $('.動畫-捲動浮出').each( function(i) {
        var itemBoxBottom = $(this).offset().top + $(this).scrollTop();
        var windowBottom = $(window).scrollTop() + window.innerHeight;
        //動畫進入
        if( windowBottom - 50 > itemBoxBottom ){
            $(this).addClass('動畫-捲動浮出_執行').removeClass('動畫-捲動浮出-離開_執行');
        }
    })
});