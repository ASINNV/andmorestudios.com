function page_indicator(){var o=$document.outerHeight()+nav_height+$content_indicator_backdrop.outerHeight()-$window.outerHeight()-height_before_animation,t=$window.scrollTop()+nav_height+$content_indicator_backdrop.outerHeight()-height_before_animation,e=$window.scrollTop()+nav_height,i=$window.scrollTop(),n=o-t,l=n/o;if(e>=height_before_animation)$content_indicator_backdrop.fadeIn(500),$stand_in.css("width",100-100*l+"%");else{$stand_in.css("width","0"),$content_indicator_backdrop.fadeOut(200);var a=(home_line_height_before_animation-i)/home_line_height_before_animation;$home_line.css("width",100*a+"%")}}function check_if_line_touches(){var o=$nav_bar.outerHeight(),t=$window.scrollTop(),e=t+o,i=$home_line,n=i.scrollTop();e>=n?$stand_in.show():origin_top>=n&&$stand_in.hide()}function check_if_in_view(){var o=$window.height(),t=$window.scrollTop(),e=t+o;$.each($animation_elements,function(){var o=$(this),i=o.outerHeight(),n=o.offset().top,l=n+i;l>=t&&e>=n&&o.addClass("in-view")}),$window.scrollTop()<125||$window.scrollTop()>$document.height()-$window.height()-$footer.height()-$nav_bar.height()?$home_nav.slideUp(300):($home_nav.slideDown(300),$("landscape-blue-line").css("width","100%")),$body.hasClass("home-page")&&(check_if_line_touches(),page_indicator(),window.matchMedia("(orientation: landscape)").matches&&$window.scrollTop()<125?$(".nav-arrows").fadeOut():$(".nav-arrows").fadeIn())}function leadIn(o,t,e){$and_more.css("background",e),setTimeout(function(){!function(){function o(){return++leaveCounter,7===leaveCounter?(t.eq(e%t.length+1).fadeIn(300),0):(++e,void t.eq(e%t.length).fadeIn(300).delay(300).fadeOut(300,o))}var t=$(".alt-name"),e=-1;o()}(),setTimeout(function(){$and_more.css("transform",t),$studios.css("transform",o),$studios.animate({opacity:"1"},1200)},6e3),$line.animate({width:"100%"},6600,function(){setTimeout(function(){$line.addClass("line-index-motion")},600)})},600)}var $enter_button=$(".enter-button"),$white_overlay=$(".white-overlay"),$landing_intro=$(".landing-intro"),$next_button_brand_sub=$(".next-button, .brand-sub, .home-banners"),$all_animation_elements=$("a, p, h1, div"),$html_body=$("html, body"),$menu_button=$(".menu-button"),$menu=$(".menu"),$click_catcher=$(".clickCatcher"),$arrow_and_name=$(".arrow-and-text, .name"),$body=$("body"),$id_one_six=$("#0, #1, #2, #3, #4, #5, #6, .banner-to-first, .bio, .right-nav"),$id_6=$("#6"),$id_5=$("#5"),$id_4=$("#4"),$id_3=$("#3"),$id_2=$("#2"),$id_1=$("#1"),$id_one_five=$("#0, #1, #2, #3, #4, #5, .banner-to-first, .bio, .right-nav"),$id_one_four=$("#0, #1, #2, #3, #4, .home-section, .intro, .right-nav"),$nav_bar=$(".nav-bar"),$welcome_logo_box=$(".welcome-logo-box"),$brand_head=$(".brand-head"),$stand_in=$(".stand-in"),$home_line=$(".home-line"),$footer=$("#footer"),$left_nav=$(".left-nav"),$home_nav=$(".home-nav"),$and_more=$(".and-more"),$studios=$(".studios"),$line=$(".line"),$content_indicator_backdrop=$(".content-indicator-backdrop"),$animation_elements=$(".animation-element"),$window=$(window),$document=$(document),origin_top=$window.scrollTop()+$nav_bar.outerHeight()+$content_indicator_backdrop.outerHeight()+$welcome_logo_box.outerHeight(!0)+$brand_head.outerHeight()+7.5,nav_height=$nav_bar.outerHeight(),height_before_animation=nav_height+$welcome_logo_box.outerHeight(!0)+$brand_head.height()+7.5,home_line_height_before_animation=$welcome_logo_box.outerHeight(!0)+$brand_head.height()+7.5-$content_indicator_backdrop.outerHeight(),leaveCounter=0;$(document).ready(function(){$window.on("scroll",check_if_in_view),$window.on("resize",check_if_in_view),$window.trigger("scroll"),setTimeout(function(){$(".home-line-inner-case").animate({width:"100%"},600)},300),$(".white-overlay-home").fadeOut(750),window.matchMedia("(min-width: 1024px)").matches?leadIn("translateX(45%)","translateY(-100%) translateX(-33%)","-webkit-linear-gradient( left, #fff 93%, transparent"):window.matchMedia("(max-width: 1023px) and (min-width: 466px)").matches?leadIn("translateX(50%)","translateY(-100%) translateX(-33.5%)","-webkit-linear-gradient( left, #fff 93%, transparent"):window.matchMedia("(max-width: 465px) and (min-width: 414px)").matches?leadIn("translate(50%)","translateY(-100%) translateX(-33.5%)","-webkit-linear-gradient( left, #fff 94%, transparent"):leadIn("translate(49%)","translateY(-100%) translateX(-33%)","-webkit-linear-gradient( left, #fff 94%, transparent"),$enter_button.click(function(o){o.preventDefault(),$enter_button.css("transition","transform .25s cubic-bezier(0, 1, 0, 1), opacity .25s linear").css("transform","scale(.1, .1)").css("opacity",0),$white_overlay.fadeIn(750),$landing_intro.css("transition","all .75s cubic-bezier(1, 0, 1, 0)").css("transform","scale(.1, .1)"),setTimeout(function(){document.location.assign("/home.html")},850)}),$next_button_brand_sub.click(function(){return $(this).hasClass("services-next")?$(".services-containing-container").find($all_animation_elements).removeClass("animation-element"):$(this).hasClass("team-next")?$(".team-content, .services-containing-container").find($all_animation_elements).removeClass("animation-element"):$(this).hasClass("contact-next")&&$all_animation_elements.removeClass("animation-element"),$html_body.animate({scrollTop:$($(this).attr("href")).offset().top},"slow"),!1}),$menu_button.click(function(){"block"===$menu.css("display")?($menu.slideUp(200),$click_catcher.hide()):($menu.slideDown(200),$click_catcher.show())}),$click_catcher.click(function(){$menu.slideUp(500),$click_catcher.hide()}),$arrow_and_name.click(function(){return $html_body.animate({scrollTop:0},"slow"),!1}),$body.hasClass("services-body")?($id_one_six.click(function(){$window.scrollTop()>=$id_6.offset().top-5?$html_body.animate({scrollTop:$document.height()},600):$window.scrollTop()>=$id_5.offset().top-5&&$window.scrollTop()<$id_6.offset().top?$html_body.animate({scrollTop:$id_6.offset().top},600):$window.scrollTop()>=$id_4.offset().top-5&&$window.scrollTop()<$id_5.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>=$id_3.offset().top-5&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top-5&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top-5&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()<$id_1.offset().top-5&&$html_body.animate({scrollTop:$id_1.offset().top},600)}),$left_nav.click(function(){$window.scrollTop()>$id_6.offset().top?$html_body.animate({scrollTop:$id_6.offset().top},600):$window.scrollTop()>$id_5.offset().top&&$window.scrollTop()<=$id_6.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>$id_4.offset().top&&$window.scrollTop()<=$id_5.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>$id_3.offset().top&&$window.scrollTop()<=$id_4.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>$id_2.offset().top&&$window.scrollTop()<=$id_3.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>$id_1.offset().top&&$window.scrollTop()<=$id_2.offset().top?$html_body.animate({scrollTop:$id_1.offset().top},600):$window.scrollTop()>0&&$window.scrollTop()<=$id_1.offset().top&&$html_body.animate({scrollTop:0},600)})):$body.hasClass("team-body")?($id_one_five.click(function(){$window.scrollTop()>=$id_5.offset().top-5?$html_body.animate({scrollTop:$document.height()},600):$window.scrollTop()>=$id_4.offset().top-5&&$window.scrollTop()<$id_5.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>=$id_3.offset().top-5&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top-5&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top-5&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>=0&&$window.scrollTop()<$id_1.offset().top&&$html_body.animate({scrollTop:$id_1.offset().top},600)}),$left_nav.click(function(){$window.scrollTop()>$id_5.offset().top?$html_body.animate({scrollTop:$id_5.offset().top},600):$window.scrollTop()>$id_4.offset().top&&$window.scrollTop()<=$id_5.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>$id_3.offset().top&&$window.scrollTop()<=$id_4.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>$id_2.offset().top&&$window.scrollTop()<=$id_3.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>$id_1.offset().top&&$window.scrollTop()<=$id_2.offset().top?$html_body.animate({scrollTop:$id_1.offset().top},600):$window.scrollTop()>0&&$window.scrollTop()<=$id_1.offset().top&&$html_body.animate({scrollTop:0},600)})):($id_one_four.click(function(){$window.scrollTop()>=$id_4.offset().top?$html_body.animate({scrollTop:$document.height()},600):$window.scrollTop()>=$id_3.offset().top&&$window.scrollTop()<$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>=$id_2.offset().top&&$window.scrollTop()<$id_3.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>=$id_1.offset().top&&$window.scrollTop()<$id_2.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>=0&&$window.scrollTop()<$id_1.offset().top&&$html_body.animate({scrollTop:$id_1.offset().top},600)}),$left_nav.click(function(){$window.scrollTop()>$id_4.offset().top?$html_body.animate({scrollTop:$id_4.offset().top},600):$window.scrollTop()>$id_3.offset().top&&$window.scrollTop()<=$id_4.offset().top?$html_body.animate({scrollTop:$id_3.offset().top},600):$window.scrollTop()>$id_2.offset().top&&$window.scrollTop()<=$id_3.offset().top?$html_body.animate({scrollTop:$id_2.offset().top},600):$window.scrollTop()>$id_1.offset().top&&$window.scrollTop()<=$id_2.offset().top?$html_body.animate({scrollTop:$id_1.offset().top},600):$window.scrollTop()>0&&$window.scrollTop()<=$id_1.offset().top&&$html_body.animate({scrollTop:0},600)})),$window.scroll(function(){$window.scrollTop()>1&&"block"===$menu.css("display")&&($menu.slideUp(300),$click_catcher.hide())}),$(".partner").click(function(){$(this).hasClass("downscaled-partner")?($(".scaled-partner").addClass("downscaled-partner").removeClass("scaled-partner"),$(this).addClass("scaled-partner").removeClass("downscaled-partner")):$(this).hasClass("scaled-partner")?($(".downscaled-partner").addClass("partner").removeClass("downscaled-partner"),$(this).addClass("partner").removeClass("scaled-partner")):($(this).addClass("scaled-partner").removeClass("partner"),$(".partner").addClass("downscaled-partner"),$(this).addClass("partner"))}),$(".partner").click(function(){$(this).hasClass("downscaled-partner")?$(".click-catcher-2").show():$(this).hasClass("scaled-partner")||$(this).hasClass("downscaled-partner")?$(".click-catcher-2").show():$(".click-catcher-2").hide()}),$(".click-catcher-2").click(function(){$(".partner").removeClass("scaled-partner").removeClass("downscaled-partner"),$(".click-catcher-2").hide()})});