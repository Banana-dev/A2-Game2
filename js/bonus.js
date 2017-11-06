$(document).ready(function() {


    // Variables
    var smallerButtonBar = $('.smallerBar');
    var smallerButtonBall = $('.smallerBall');
    var biggerButtonBar = $('.biggerBar');
    var biggerButtonBall = $('.biggerBall');
    var alreadyBig = false;
    var bigBar = false;
    var smallBar = false;
    var alreadySmall = false;

    var bar = $('#bar');
    var barWidth = bar.css('width');
    var ball = $('#ball');


    // Events
    $(smallerButtonBar).stop(true, true).click(function (e) {
        smallerBar();
    });
    $(smallerButtonBall).stop(true, true).click(function (e) {
        smallerBall();
    });
    $(biggerButtonBar).stop(true, true).click(function (e) {
        biggerBar();
    });
    $(biggerButtonBall).stop(true, true).click(function (e) {
        biggerBall();
    });

    function biggerBall() {
        console.log('la balle grossit');
    }
    function biggerBar () {

        if (alreadyBig)
            return false;

        bar.css('width', 250);
        bigBar = true;
        smallBar = false;
        alreadyBig = true;
        alreadySmall = false;
        setTimeout(function () {
            if(bigBar && !smallBar) {
                bar.css('width', 150);
                bigBar = false;
                alreadyBig = false;
            }
        },2000);
    }
    function smallerBar () {

        if (alreadySmall)
            return false;

        bar.css('width', 50);
        smallBar = true;
        bigBar = false;
        alreadyBig = false;
        alreadySmall = true;
        setTimeout(function () {
            if(smallBar && !bigBar) {
                bar.css('width', 150);
                smallBar = false;
                alreadySmall = false;
            }
        },2000);
    }
    function smallerBall () {
        console.log('la balle se ramolie');
    }
});