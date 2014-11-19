function resetMenuHighlight() {
    var menuSections = $(".navigation #sections ul");
    $("#vello-link").css("color", "black");
    $("#pivotal-link #red, #pivotal-link #blue").css("color", "black");
    menuSections.find('li').each(function () {
        $(this).removeClass("menu-highlight");
        $(this).find("a").removeClass("menu-text-highlight-mobile");
        $(this).find("a").removeClass("menu-text-highlight");
    });
    $(".navigation").css("background-color", "rgba(64,64,64,0.85)");

}
//respnnsiveness
var resizeContent = function () {
    // var browser = window.navigator.userAgent;
//            var msie = browser.indexOf("MSIE ");
//            var safari = browser.indexOf("Safari");
//            var chrome = browser.indexOf("Chrome");
    // var firefox = browser.indexOf("Firefox");
    var height = $(window).height();
    $("#intro").height(height);
    var width = $(window).width();
    if (width <= 1320) {
        var abtContHeight = $("#about .container").height();
        abtContHeight += 30;
        $("#about").css("height", abtContHeight + "px");
        $("#about-filter").css("height", abtContHeight + "px");
    } else {
        $("#about").css("height", "540px");
        $("#about-filter").css("height", "540px");
        $("#about .container p").css('width','689px');
    }

    //position of #intro .container
    $("#intro .container").css("position", "absolute").css("left", ((width / 2) - ($("#intro .container").width() / 2)) + "px").css("top", ((height / 2) - ($("#intro .container").height() / 2) - 20) + "px");
    $("#intro #scrl-dwn-btn").css("left", ((width / 2) - ($("#intro #scrl-dwn-btn").width() / 2)) + "px");
    $(".job-details").css("left", ((width / 2) - ($(".job-details").width() / 2)) + "px");
    $("#work").css("height", $(".job-details").height() + 40 + "px");
    $("#projects").css("height", $("#project-list").height() + 120 + "px");
    $("#project-list").css("margin-top", $("#projects .container .section-header").height() + 30 + "px");

    if (width <= 500) {
        $("#intro .container").find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover");
        $("#intro .container").find("h1").html("timothy</br>tong");
        $("#about .section-header").html("A<span>bout.</span>");
        $("#work .section-header").html("W<span>ork.</span>");

    } else {
        if (width <= 720) {
            $("#work").css("height", $(".job-details").height() + 60 + "px");
        }
        $("#intro .container").find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover");
        $("#intro .container").find("h1").html("timothy tong");
        $("#about .section-header").html("A<span>bout me.</span>");
        $("#work .section-header").html("W<span>ork experience.</span>");
        $("#intro-name").addClass("intro-name-desktop");
        if (height <= 400) {
            $("#intro .container").find("h1").css("margin-top", "20px");
        }
    }
    $('#vello').css("top", $("#pivotal-line").offset().top - $('#work').offset().top + 20 + "px");

    //Timeline
//    $('.circle-pivotal').css("top", $('.pivotal-labs .company-name').offset().top - $('#work').offset().top + "px").css('left', $('.pivotal-labs .position').offset().left / 2 + 'px');
//    $('.circle-vello').css("top", $('.vello .company-name').offset().top - $('#work').offset().top + "px").css('left', $('.vello .position').offset().left / 2 + 'px');
//    $('#timeline').css("height", $('.pivotal-labs').height() + $('.vello').height() - 50 + 'px').css("top", $('.pivotal-labs .company-name').offset().top + $(".circle").height() / 2 - $('#work').offset().top + "px").css('left', $('.circle').offset().left + 8 + "px");
};
$(document).ready(function () {
    var width = $(window).width();
    resizeContent();
    $(window).resize(function () {
        resizeContent();
    });
    function checkWidth() {
        width = $(window).width();
    }
    $('#menu-icon').click(function (e) {
        e.preventDefault();
        checkWidth();
        if (width <= 959) {
            $('#sections').toggleClass("sections-open");
        }
    });
    $('#intro #scrl-dwn-btn').click(function () {
        $("html, body").animate({scrollTop: $('#about').offset().top - $('.navigation').height()}, 1000, 'swing');
    });
    $('#sections ul li').click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        if ($(this).is(".about")) {
            body.animate({scrollTop: $('#about').offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".work")) {
            body.animate({scrollTop: $('#work').offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".projects")) {
            body.animate({scrollTop: $('#projects').offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".contact")) {
            body.animate({scrollTop: $('#contact').offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
    });
    $('#initial-and-name .back-to-top').click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        body.animate({scrollTop: 0}, 'slow', 'swing', function () {
        });
    });

    var browser = window.navigator.userAgent;
    var msie = browser.indexOf("MSIE ");
    var safari = browser.indexOf("Safari");
    var chrome = browser.indexOf("Chrome");
    var firefox = browser.indexOf("Firefox");
    if (msie > 0) {
        if (parseInt(browser.substring(msie + 5, browser.indexOf(".", msie))) <= 8) {
            alert("Friendly advice: Please consider upgrading your browser.");
        }//IE VERSION
        $('svg').hide();
    }
    else if (firefox > 0) {
        $(".work span").addClass("firefox-work");
        $(".projects, .contact").hover(function () {
            $(this).find("span").toggleClass("firefox-projects-contact-hover");
        });
        $(".about, .work").hover(function () {
            $(this).find("span").toggleClass("firefox-about-work-hover");
        });
    }
    else if (safari > 0 || chrome > 0) {
        $(".about span, .work span").addClass("safari-chrome-about-work");
        $(".about, .work").hover(function () {
            $(this).find("span").toggleClass("safari-chrome-about-work-hover");
        });
        $(".projects span").addClass("safari-chrome-projects");
        $(".contact span, .work span").addClass("safari-chrome-contact");
        $(".projects, .contact").hover(function () {
            $(this).find("span").toggleClass("safari-chrome-projects-contact-hover");
        });
    }
    $('#pivotal-link').hover(function () {
        $("#pivotal-link #blue").toggleClass("blue");
        $("#pivotal-link #red").toggleClass("red");
    });

    // firstRun = false;
    var navHidden = true;
    var navbarHeight = $('.navigation').outerHeight();
    var menuHighlight = 0;

    $(window).scroll(function () {
        var width = $(window).width();
        var curOffset = $(this).scrollTop();
        if (curOffset >= $("#about").offset().top - navbarHeight && navHidden) {
            navHidden = false;
            $(".navigation").slideDown();
        }
        if (curOffset < $("#about").offset().top - navbarHeight && !navHidden) {
            navHidden = true;
            $(".navigation").slideUp();
        }
        if (curOffset < $("#about").offset().top - navbarHeight) {
            resetMenuHighlight();
            menuHighlight = 0;
        }
        else if (curOffset >= $("#about").offset().top - navbarHeight && curOffset < $("#work").offset().top - navbarHeight - 50 && menuHighlight !== 1) {
            menuHighlight = 1;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $(".about").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".about a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#work").offset().top - 50 - navbarHeight && curOffset < $("#pivotal-line").offset().top - navbarHeight - 50 && menuHighlight !== 2) {
            menuHighlight = 2;
            resetMenuHighlight();
            $(".navigation").css("background-color", "rgba(0,119,192,1)");
            $("#pivotal-link #blue").css("color", "rgb(0,119,192)");
            $("#pivotal-link #red").css("color", "rgb(196,18,48)");
            //$(".circle-pivotal").addClass("circle-pivotal-color");
            //$(".circle-vello").addClass("circle-vello-color");
            if (width < 960) {
                $(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".work").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#pivotal-line").offset().top - 50 - navbarHeight && curOffset < $("#quote").offset().top - navbarHeight && menuHighlight !== 3) {
            menuHighlight = 3;
            resetMenuHighlight();
            $(".navigation").css("background-color", "rgba(39,186,189,1)");
            $("#vello-link").css("color", "rgb(39,186,189)");
            //$(".circle-pivotal").addClass("circle-pivotal-color");
            //$(".circle-vello").addClass("circle-vello-color");
            if (width < 960) {
                $(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".work").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#quote").offset().top - navbarHeight - 30 && curOffset < $("#projects").offset().top - navbarHeight && menuHighlight !== 0) {
            menuHighlight = 0;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
        }
        else if (curOffset >= $("#projects").offset().top - navbarHeight && curOffset < $("#contact").offset().top - navbarHeight && menuHighlight !== 4) {
            menuHighlight = 4;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $(".projects").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".projects").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#contact").offset().top - navbarHeight && menuHighlight !== 5) {
            menuHighlight = 5;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $(".contact").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".contact").find("a").addClass("menu-text-highlight-mobile");
            }
        }
    });
    $('#menu-icon').bind('touchstart touchend', function () {
        $(this).toggleClass('menu-icon-highlight-mobile');
    });
    $("#sections ul li a").bind('touchstart touchend', function () {
        $(this).toggleClass('menu-items-highlight-mobile');
    });
    $("#initial-and-name .back-to-top").bind('touchstart touchend', function () {
        $(this).toggleClass('back-to-top-highlight-mobile');
    });
    setTimeout(resizeContent, 300);
});
        