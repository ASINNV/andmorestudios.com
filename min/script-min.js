function page_indicator(){var o=$document.outerHeight()+nav_height+$content_indicator_backdrop.outerHeight()-$window.outerHeight()-height_before_animation,t=$window.scrollTop()+nav_height+$content_indicator_backdrop.outerHeight()-height_before_animation,e=$window.scrollTop()+nav_height,i=$window.scrollTop(),n=o-t,s=n/o;if(e>=height_before_animation)$content_indicator_backdrop.fadeIn(500),$stand_in.css("width",100-100*s+"%");else{$stand_in.css("width","0"),$content_indicator_backdrop.fadeOut(200);var l=(home_line_height_before_animation-i)/home_line_height_before_animation;$home_line.css("width",100*l+"%")}}function check_if_line_touches(){var o=$nav_bar.outerHeight(),t=$window.scrollTop(),e=t+o,i=$home_line,n=i.scrollTop();e>=n?$stand_in.show():origin_top>=n&&$stand_in.hide()}function check_if_in_view(){var o=$window.height(),t=$window.scrollTop(),e=t+o;$.each($animation_elements,function(){var o=$(this),i=o.outerHeight(),n=o.offset().top,s=n+i;s>=t&&e>=n&&o.addClass("in-view")}),$body.hasClass("home-page")&&(check_if_line_touches(),page_indicator())}function leadIn(){setTimeout(function(){!function(){function o(){return++leaveCounter,7===leaveCounter?(t.eq(e%t.length+1).fadeIn(300),0):(++e,void t.eq(e%t.length).fadeIn(250).delay(250).fadeOut(250,o))}var t=$(".alt-name"),e=-1;o()}(),setTimeout(function(){$studios.animate({opacity:"1"},1200)},5e3),$line.animate({width:"100%"},4600,function(){setTimeout(function(){$line.addClass("line-index-motion"),$(".studios").addClass("down-move"),setTimeout(function(){$(".studios").addClass("stalled-spacing")},400)},400)})},400)}var $enter_button=$(".enter-button"),$white_overlay=$(".white-overlay"),$landing_intro=$(".landing-intro"),$next_button_brand_sub=$(".next-button, .brand-sub, .home-banners"),$all_animation_elements=$("a, p, h1, div"),$html_body=$("html, body"),$menu_button=$(".menu-button"),$menu=$(".menu"),$click_catcher=$(".clickCatcher"),$arrow_and_name=$(".arrow-and-text, .name"),$body=$("body"),$member=$(".member"),$id_one_six=$("#0, #1, #2, #3, #4, #5, #6, #7, .banner-to-first, .bio, .other-content-divider"),$id_one_five=$("#0, #1, #2, #3, #4, #5, #6, #7, .banner-to-first, .bio,  .other-content-divider"),$id_one_four=$("#0, #1, #2, #3, #4, .home-section, .intro, .other-content-divider"),$id_10=$("#10"),$id_9=$("#9"),$id_8=$("#8"),$id_7=$("#7"),$id_6=$("#6"),$id_5=$("#5"),$id_4=$("#4"),$id_3=$("#3"),$id_2=$("#2"),$id_1=$("#1"),$nav_bar=$(".nav-bar"),$welcome_logo_box=$(".welcome-logo-box"),$brand_head=$(".brand-head"),$stand_in=$(".stand-in"),$home_line=$(".home-line"),$studios=$(".studios"),$line=$(".line"),$content_indicator_backdrop=$(".content-indicator-backdrop"),$animation_elements=$(".animation-element"),$window=$(window),$document=$(document),origin_top=$window.scrollTop()+$nav_bar.outerHeight()+$content_indicator_backdrop.outerHeight()+$welcome_logo_box.outerHeight(!0)+$brand_head.outerHeight()+7.5,nav_height=$nav_bar.outerHeight(),height_before_animation=nav_height+$welcome_logo_box.outerHeight(!0)+$brand_head.height()+7.5,home_line_height_before_animation=$welcome_logo_box.outerHeight(!0)+$brand_head.height()+7.5-$content_indicator_backdrop.outerHeight(),leaveCounter=0;$(document).ready(function(){$window.on("scroll",check_if_in_view),$window.on("resize",check_if_in_view),$window.trigger("scroll"),$(".interstate").click(function(o){o.stopPropagation()}),setTimeout(function(){$(".home-line-inner-case").animate({width:"100%"},600)},300),$(".white-overlay-home").fadeOut(750),$body.hasClass("landing")&&leadIn(),1024===$(".all-content").width()&&$(".service").removeClass("animation-element"),$enter_button.click(function(o){o.preventDefault(),$white_overlay.fadeIn(750),$landing_intro.addClass("landing-outro"),setTimeout(function(){document.location.assign("/home.html")},650)}),$next_button_brand_sub.click(function(){return $(this).hasClass("services-next")?$(".services-containing-container").find($all_animation_elements).removeClass("animation-element"):$(this).hasClass("team-next")?$(".team-content, .services-containing-container").find($all_animation_elements).removeClass("animation-element"):$(this).hasClass("contact-next")&&$all_animation_elements.removeClass("animation-element"),$html_body.animate({scrollTop:$($(this).attr("href")).offset().top},"slow"),!1}),$menu_button.click(function(){"block"===$menu.css("display")?($menu.slideUp(200),$click_catcher.hide()):($menu.slideDown(200),$click_catcher.show())}),$click_catcher.click(function(){$menu.slideUp(500),$click_catcher.hide()}),$arrow_and_name.click(function(){return $html_body.animate({scrollTop:0},"slow"),!1}),$body.hasClass("services-body")?$id_one_six.click(function(){$window.scrollTop()>=$id_10.offset().top-5?$html_body.animate({scrollTop:$document.height()},1200):$window.scrollTop()>=$id_9.offset().top-5&&$window.scrollTop()<$id_10.offset().top?$html_body.animate({scrollTop:$id_10.offset().top},600):$window.scrollTop()>=$id_8.offset().top-5&&$window.scrollTop()<$id_9.offset().top?$html_body.animate({scrollTop:$id_9.offset().top},600):$window.scrollTop()>=$id_7.offset().top-5&&$window.scrollTop()<$id_8.offset().top?$html_body.animate({scrollTop:$id_8.offset().top},600):$window.scrollTop()>=$id_6.offset().top-5&&$window.scrollTop()<$id_7.offset().top?$html_body.animate({scrollTop:$id_7.offset().top},600):$window.scrollTop()>=$id_5.offset().top-5&&$window.scrollTop()<$id_6.offset().top?$html_body.animate({scrollTop:$id_6.offset().top},600):$window.scrollTop()>=$id_4.offset().top-5&&$window.scrollTop()<$id_5.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>=$id_3.offset().top-5&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top-5&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top-5&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()<$id_1.offset().top-5&&$html_body.animate({scrollTop:$id_1.offset().top},600)}):$body.hasClass("team-body")?$id_one_five.click(function(){$window.scrollTop()>=$id_7.offset().top-5?$html_body.animate({scrollTop:$document.height()},1200):$window.scrollTop()>=$id_6.offset().top-5&&$window.scrollTop()<$id_7.offset().top?$html_body.animate({scrollTop:$id_7.offset().top},600):$window.scrollTop()>=$id_5.offset().top-5&&$window.scrollTop()<$id_6.offset().top?$html_body.animate({scrollTop:$id_6.offset().top},600):$window.scrollTop()>=$id_4.offset().top-5&&$window.scrollTop()<$id_5.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>=$id_3.offset().top-5&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top-5&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top-5&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>=0&&$window.scrollTop()<$id_1.offset().top&&$html_body.animate({scrollTop:$id_1.offset().top},600)}):$id_one_four.click(function(){$window.scrollTop()>=$id_4.offset().top-5?$html_body.animate({scrollTop:$document.height()},1200):$window.scrollTop()>=$id_3.offset().top-5&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top-5&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top-5&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>=0&&$window.scrollTop()<$id_1.offset().top&&$html_body.animate({scrollTop:$id_1.offset().top},600)}),$window.scroll(function(){$window.scrollTop()>1&&"block"===$menu.css("display")&&($menu.slideUp(300),$click_catcher.hide())}),$(".partner").click(function(){$(this).hasClass("downscaled-partner")?($(".scaled-partner").addClass("downscaled-partner").removeClass("scaled-partner"),$(this).addClass("scaled-partner").removeClass("downscaled-partner")):$(this).hasClass("scaled-partner")?($(".downscaled-partner").addClass("partner").removeClass("downscaled-partner"),$(this).addClass("partner").removeClass("scaled-partner")):($(this).addClass("scaled-partner").removeClass("partner"),$(".partner").addClass("downscaled-partner"),$(this).addClass("partner"))}),$(".partner").click(function(){$(this).hasClass("downscaled-partner")?$(".click-catcher-2").show():$(this).hasClass("scaled-partner")||$(this).hasClass("downscaled-partner")?$(".click-catcher-2").show():$(".click-catcher-2").hide()}),$(".click-catcher-2").click(function(){$(".partner").removeClass("scaled-partner").removeClass("downscaled-partner"),$(".click-catcher-2").hide()}),$member.mouseenter(function(){$(this).children(".nameplate").css("transition","opacity .2s ease-in-out").css("opacity","0")}),$member.mouseleave(function(){$(this).children(".nameplate").css("transition","opacity .2s ease-in-out").css("opacity","1")})});