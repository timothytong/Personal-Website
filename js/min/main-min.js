function resetMenuHighlight(){var t=$(".navigation #sections ul");$("#vello-link").css("color","black"),$("#pivotal-link #red, #pivotal-link #blue").css("color","black"),t.find("li").each(function(){$(this).removeClass("menu-highlight"),$(this).find("a").removeClass("menu-text-highlight-mobile"),$(this).find("a").removeClass("menu-text-highlight")}),$(".navigation").css("background-color","rgba(64,64,64,0.85)")}var resizeContent=function(){var t=$(window).height();$("#intro").height(t);var o=$(window).width(),i=$("#intro .container"),e=$("#intro #scrl-dwn-btn"),s=$(".job-details"),n=$("#about"),a=$("#work"),h=$("#projects"),l=$("#project-list"),r=$("#about-filter");if(1320>=o){var c=$("#about .container").height();c+=20,n.css("height",c+"px"),r.css("height",c+"px")}else n.css("height","439px"),r.css("height","439px");i.css("position","absolute").css("left",o/2-i.width()/2+"px").css("top",t/2-i.height()/2-20+"px"),e.css("left",o/2-e.width()/2+"px"),s.css("left",o/2-s.width()/2+"px"),a.css("height",s.height()+40+"px"),h.css("height",l.height()+100+"px"),$("#project-list").css("margin-top",$("#projects .container .section-header").height()+30+"px"),500>=o?(i.find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover"),i.find("h1").html("timothy</br>tong"),$("#about .section-header").html("A<span>bout.</span>"),$("#work .section-header").html("W<span>ork.</span>")):(720>=o&&a.css("height",s.height()+60+"px"),i.find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover"),i.find("h1").html("timothy tong"),$("#about .section-header").html("A<span>bout me.</span>"),$("#work .section-header").html("W<span>ork experience.</span>"),$("#intro-name").addClass("intro-name-desktop"),400>=t&&i.find("h1").css("margin-top","20px")),$("#vello").css("top",$("#pivotal-line").offset().top-$("#work").offset().top+20+"px")};$(document).ready(function(){function t(){o=$(window).width()}var o=$(window).width();resizeContent(),$(window).resize(function(){resizeContent()}),$("#menu-icon").click(function(i){i.preventDefault(),t(),959>=o&&$("#sections").toggleClass("sections-open")}),$("#intro #scrl-dwn-btn").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top-$(".navigation").height()},1e3,"swing")}),$("#sections ul li").click(function(t){t.preventDefault();var o=$("html, body");$(this).is(".about")?o.animate({scrollTop:$("#about").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".work")?o.animate({scrollTop:$("#work").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".projects")?o.animate({scrollTop:$("#projects").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".contact")&&o.animate({scrollTop:$("#contact").offset().top-$(".navigation").height()},1e3,"swing")}),$("#initial-and-name .back-to-top").click(function(t){t.preventDefault();var o=$("html, body");o.animate({scrollTop:0},"slow","swing",function(){})});var i=window.navigator.userAgent,e=i.indexOf("MSIE "),s=i.indexOf("Safari"),n=i.indexOf("Chrome"),a=i.indexOf("Firefox");e>0?(parseInt(i.substring(e+5,i.indexOf(".",e)))<=8&&alert("Friendly advice: Please consider upgrading your browser."),$("svg").hide()):a>0?($(".work span").addClass("firefox-work"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("firefox-projects-contact-hover")}),$(".about, .work").hover(function(){$(this).find("span").toggleClass("firefox-about-work-hover")})):(s>0||n>0)&&($(".about span, .work span").addClass("safari-chrome-about-work"),$(".about, .work").hover(function(){$(this).find("span").toggleClass("safari-chrome-about-work-hover")}),$(".projects span").addClass("safari-chrome-projects"),$(".contact span, .work span").addClass("safari-chrome-contact"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("safari-chrome-projects-contact-hover")}));var h=!0,l=$(".navigation").outerHeight(),r=0;$(window).scroll(function(){var t=$(window).width(),o=$(this).scrollTop();o>=$("#about").offset().top-l&&h&&($(".navigation").slideDown(),h=!1),o<$("#about").offset().top-l&&!h&&($(".navigation").slideUp(),h=!0),o<$("#about").offset().top-l?(resetMenuHighlight(),r=0):o>=$("#about").offset().top-l&&o<$("#work").offset().top-l-50&&1!==r?(resetMenuHighlight(),r=1,960>t?$(".about").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".about").find("a").addClass("menu-text-highlight")):o>=$("#work").offset().top-50-l&&o<$("#pivotal-line").offset().top-l-50&&2!==r?(resetMenuHighlight(),r=2,$(".navigation").css("background-color","rgba(0,119,192,1)"),$("#pivotal-link #blue").css("color","rgb(0,119,192)"),$("#pivotal-link #red").css("color","rgb(196,18,48)"),960>t?$(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".work").find("a").addClass("menu-text-highlight")):o>=$("#pivotal-line").offset().top-50-l&&o<$("#vello-line").offset().top-l&&3!==r?(resetMenuHighlight(),$(".navigation").css("background-color","rgba(39,186,189,1)"),$("#vello-link").css("color","rgb(39,186,189)"),r=3,960>t?$(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".work").find("a").addClass("menu-text-highlight")):o>=$("#quote").offset().top-l-30&&o<$("#projects").offset().top-l&&0!==r?(resetMenuHighlight(),r=0):o>=$("#projects").offset().top-l&&o<$("#contact").offset().top-l&&4!==r?(resetMenuHighlight(),r=4,960>t?$(".projects").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".projects").find("a").addClass("menu-text-highlight")):o>=$("#contact").offset().top-l&&5!==r&&(resetMenuHighlight(),r=5,960>t?$(".contact").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".contact").find("a").addClass("menu-text-highlight-mobile"))}),$("#menu-icon").bind("touchstart touchend",function(){$(this).toggleClass("menu-icon-highlight-mobile")}),$("#sections ul li a").bind("touchstart touchend",function(){$(this).toggleClass("menu-items-highlight-mobile")}),$("#initial-and-name .back-to-top").bind("touchstart touchend",function(){$(this).toggleClass("back-to-top-highlight-mobile")}),setTimeout(resizeContent,300)});