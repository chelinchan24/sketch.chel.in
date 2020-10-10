/* 多性別選項 Suitable Gender */
// © 2020 詹喆麟
// https://chelinchan.com

var isGenderSelected = false
var gender = "";

$(document).ready(function (){
    setViewHeight();
})

$('#頁腳-右-更改多性別').click(function () {
    createGenderWidnow("reSelected")
})

/* 抓取視窗高度 */
function setViewHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
/* ---
   讀取
   --- */
$(window).load(function() {
    cookieGender = Cookies.get('suit-gend');
    gender = cookieGender;
    // 是否已指定
    if (typeof(cookieGender) === "undefined") {
        createGenderWidnow("newAsk")
    } else {
        setGender(gender);
    }
})

/* -------
   詢問性別
   ------- */
var wholeWindow = $('#多性別選項');
var askWindow = $('#多性別選項-上-詢問');
var doneWindow = $('#多性別選項-上-完成');

var hideElement = "多性別選項_不顯示";

var bottomBtnBottomSection = $('#多性別選項-下-下');

function createGenderWidnow(from) {
    setViewHeight()
    wholeWindow.removeClass('多性別選項_關閉 多性別選項_不顯示');
    wholeWindow.addClass('多性別選項_開啟');

    if (from === "newAsk") {
        $('#多性別選項-按鈕-開始瀏覽').removeClass(hideElement)
        $('#多性別選項-按鈕-完成').addClass(hideElement)
    } else if (from === "reSelected") {
        $('#多性別選項-按鈕-完成').removeClass(hideElement)
        $('#多性別選項-按鈕-開始瀏覽').addClass(hideElement)
    }
}

var genderBtnSection = $('#多性別選項-按鈕_女性');

genderBtnSection.ready (function () {
    console.log('ready');

    femaleBtn = $('#多性別選項-按鈕_女性');
    maleBtn = $('#多性別選項-按鈕_男性');

    btnSelected = "多性別選項-按鈕_選擇";

    btnUnfocused = "多性別選項-按鈕_失焦";

    femaleBtn.click(function () {
        console.log('hello')
        femaleBtn.addClass(btnSelected).removeClass(btnUnfocused);
        maleBtn.removeClass(btnSelected).addClass(btnUnfocused);
        saveGender('female');
        doneGender();
    });

    maleBtn.click(function () {
        maleBtn.addClass(btnSelected).removeClass(btnUnfocused);
        femaleBtn.removeClass(btnSelected).addClass(btnUnfocused);
        saveGender('male');
        doneGender();
    });

    $('.多性別選項-按鈕_套用').click(function () {
        wholeWindow.addClass('多性別選項_關閉');
        wholeWindow.removeClass('多性別選項_開啟');
        // wholeWindow.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        //     console.log('hideWholeWindow');
        //     wholeWindow.addClass('多性別選項_不顯示');
        // });
        setTimeout('wholeWindow.addClass(hideElement);', 250);
    })
})

function doneGender () {
    askWindow.addClass(hideElement)
    doneWindow.removeClass(hideElement)
    bottomBtnBottomSection.removeClass(hideElement)
    bottomBtnBottomSection.addClass ('多性別選項-按鈕_套用_動畫-進入')
}

//寫入 Cookie
function saveGender(userGender) {
    Cookies.set('suit-gend', userGender, { expires: 365 });
    gender = userGender;
    setGender();
}

/* ----
   套用
   ---- */
function setGender() {
    if (gender == "female") {
        $('.多性別').html('妳')
    } else {
        $('.多性別').html('你')
    }
}