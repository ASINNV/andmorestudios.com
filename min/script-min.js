$.fn.scrollBottom=function(){return $(document).height()-this.scrollTop()-this.height()},$(document).ready(function(){$(".line").animate({width:"36%"},1400,function(){$(".enter-button").fadeIn(500)}),$(".menu-button").click(function(){$(".menu").slideToggle(500)}),$("a").click(function(){return"block"===$(".menu").css("display")&&$(".menu").toggle(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},1200),!1}),$(window).scroll(function(){$(window).scrollBottom()<300?$(".smooth").fadeIn(500):$(".smooth").fadeOut(500)}),$(".smooth").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(window).scroll(function(){$(window).scrollTop()>1&&"block"===$(".menu").css("display")&&$(".menu").slideUp(100)})});