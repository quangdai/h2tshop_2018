$(document).ready(function(){
    //-------------columnize------------
    $(function(){
    $('div.step_col1').columnize({width:250});
    });
    //-------------------------

     $(".menuleft li .step").css({ "visibility": "hidden" });
     $(".menuleft li a").hover(function () {
     $(this).parent().find(".step").css({ "visibility": "visible" });

     $(this).parent().hover(function () {
     }, function () {
     $(this).parent().find(".step").css({ "visibility": "hidden" });
     });
     });

    //-------------------------
    $(".view_support").css({ "display": "none" });
    $("#b_ol").hover(function () {
        $(this).parent().find(".view_support").css({ "display": "block" });

        $(this).parent().hover(function () {
        }, function () {
            $(this).parent().find(".view_support").css({ "display": "none" });
        });
    });
    //-------------------------

    $("#m_hot_sub").css({ "visibility": "hidden" });
    $("#mhot").hover(function () {
        $("#m_hot_sub").css({ "visibility": "visible" });

        $(this).parent().hover(function () {
        }, function () {
            $("#m_hot_sub").css({ "visibility": "hidden" });
        });
    });

    //----------banner------------
    $(window).load(function () {
        $('#slider').nivoSlider();
    });
    $(window).load(function () {
        $('#slider2').nivoSlider();
    });
    //-------------------------
    $(function () {
        $('.zoomp a').lightBox();
    });
    //-------------------------
    $(function () {
        $("#tab1 .tab_h1_in").jCarouselLite({
            btnNext: ".tab_h1 .next",
            btnPrev: ".tab_h1 .prev",
            visible: 5,
            scroll: 5,
            auto: 8000,
            speed: 800
        })
    });
    $(function () {
        $("#tab2 .tab_h1_in").jCarouselLite({
            btnNext: ".tab_h1 .next",
            btnPrev: ".tab_h1 .prev",
            visible: 5,
            scroll: 5,
            auto: 10000,
            speed: 800
        })
    });
    $(function () {
        $("#tab3 .tab_h1_in").jCarouselLite({
            btnNext: ".tab_h1 .next",
            btnPrev: ".tab_h1 .prev",
            visible: 5,
            scroll: 5,
            auto: 12000,
            speed: 800
        })
    });
    $(function () {
        $("#tab4 .tab_h1_in").jCarouselLite({
            btnNext: ".tab_h1 .next",
            btnPrev: ".tab_h1 .prev",
            visible: 5,
            scroll: 5,
            auto: 14000,
            speed: 800
        })
    });
    $(function () {
        $("#tab5 .tab_h1_in").jCarouselLite({
            btnNext: ".tab_h1 .next",
            btnPrev: ".tab_h1 .prev",
            visible: 5,
            scroll: 5,
            auto: 16000,
            speed: 800
        })
    });
    //------------navi-------------
    /*$('ul#nav').superfish({
        hoverClass:    'm_hover',          // the class applied to hovered list items
        pathClass:     'm_current',          // the class you have applied to list items that lead to the current page
        pathLevels:    1,                  // the number of levels of submenus that remain open or are restored using pathClass
        delay:         200,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing
        animation:     {opacity:'show'},   // an object equivalent to first parameter of jQuery’s .animate() method
        speed:         'fast',           // speed of the animation. Equivalent to second parameter of jQuery’s .animate() method
        autoArrows:    false,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance
        dropShadows:   true,               // completely disable drop shadows by setting this to false
        disableHI:     true,              // set to true to disable hoverIntent detection
        onInit:        function(){},       // callback function fires once Superfish is initialised – 'this' is the containing ul
        onBeforeShow:  function(){},       // callback function fires just before reveal animation begins – 'this' is the ul about to open
        onShow:        function(){},       // callback function fires once reveal animation completed – 'this' is the opened ul
        onHide:        function(){}        // callback function fires after a sub-menu has closed – 'this' is the ul that just closed
    });*/
    //-------------------------

});

//-----------------eraseCookieCart------------------
/*
function eraseCookieCart(name,lang){
    var text = "Bạn muốn xóa giỏ hàng ?";
    if(lang=="en"){ar
        text = "Do you want to delete Cart";
    }
    if(confirm(text)){
        createCookie(name,"",-1);window.location = "/";
    }
}*/
//-----------------CountDown------------------

//-----------------------------------