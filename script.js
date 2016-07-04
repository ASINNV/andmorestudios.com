// $.fn.scrollBottom = function() {return $(document).height() - this.scrollTop() - this.height();
// };





// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
// 	triggerElement: '.home-line',
// 	duration: 400,
// 	triggerHook: "onLeave"
// }).setPin('.stand-in');
// controller.addScene(scene);


	// $(function () { // wait for document ready
	// 	// init
	// 	var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
	// 			triggerHook: 'onLeave'
	// 		}
	// 	});

	// 	// get all slides
	// 	var slides = document.querySelectorAll(".bio");

	// 	// create scene for every slide
	// 	for (var i=0; i<slides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 			})
	// 			.setPin(slides[i])
	// 			// .addIndicators() // add indicators (requires plugin)
	// 			.addTo(controller);
	// 	}
	// });
var $enter_button = $('.enter-button');
var $white_overlay = $('.white-overlay');
var $landing_intro = $('.landing-intro');

var $next_button_brand_sub = $('.link, .brand-sub, .home-banners');
var $all_animation_elements = $('a, p, h1, div');
var $html_body = $('html, body');

var $menu_button = $('.menu-button');
var $menu = $('.menu');
var $click_catcher = $('.clickCatcher');

var $arrow_and_name = $('.arrow-and-text, .name');

var $body = $('body');
var $id_one_six = $('#0, #1, #2, #3, #4, #5, #6, .banner-to-first, .bio, .right-nav');
// var $sidebar_indicator = $('.sidebar-indicator');
// var $sidebar_member_container = $('.sidebar-member-container');
// var $sidebar_member = $('.sidebar-member');
// var $service_plug = $('.service-plug');
var $id_6 = $('#6');
var $id_5 = $('#5');
var $id_4 = $('#4');
var $id_3 = $('#3');
var $id_2 = $('#2');
var $id_1 = $('#1');
// var $sidebar_6 = $('.sidebar-6');
// var $sidebar_5 = $('.sidebar-5');
// var $sidebar_4 = $('.sidebar-4');
// var $sidebar_3 = $('.sidebar-3');
// var $sidebar_2 = $('.sidebar-2');
// var $sidebar_1 = $('.sidebar-1');

var $id_one_five = $('#0, #1, #2, #3, #4, #5, .banner-to-first, .bio, .right-nav');
var $id_one_four = $('#0, #1, #2, #3, #4, .home-section, .intro, .right-nav');




var $nav_bar = $('.nav-bar');
// for height of indicator line
var $welcome_logo_box = $('.welcome-logo-box');
var $brand_head = $('.brand-head');
var $stand_in = $('.stand-in');
var $home_line = $('.home-line');

var $footer = $('#footer');
var $left_nav = $('.left-nav');

// var $team_banner = $('.team-banner');
// var $blue_line_case = $('.blue-line-case');
// var $home_nav = $('.home-nav');

// var $tap_disappear = $('.tap-anywhere-wrapper, .next-button, .welcome-page, .team-banner, .services-section, .team-section, .contact-section, .arrow-and-text');
// var $tap_anywhere_wrapper = $('.tap-anywhere-wrapper');

// var $and_more = $('.and-more');
var $studios = $('.studios');
var $line = $('.line');

var $content_indicator_backdrop = $('.content-indicator-backdrop');



var $animation_elements = $('.animation-element');
var $window = $(window);
var $document = $(document);

// the point at which indicator line appears on screen
var origin_top = $window.scrollTop() + $nav_bar.outerHeight() + $content_indicator_backdrop.outerHeight() + $welcome_logo_box.outerHeight(true) + $brand_head.outerHeight() + 7.5;

// var origin_bottom = origin_top + $('.home-line').outerHeight();


// page indicator JS
// page indicator JS

	var nav_height = $nav_bar.outerHeight();
	var height_before_animation = nav_height + $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5;
	var home_line_height_before_animation = $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5 - $content_indicator_backdrop.outerHeight();

function page_indicator() {
		var animation_area = ($document.outerHeight() + nav_height + $content_indicator_backdrop.outerHeight() - $window.outerHeight() - height_before_animation);

		var scroll_position = ($window.scrollTop() + nav_height + $content_indicator_backdrop.outerHeight() - height_before_animation);
		var scroll_from_top = $window.scrollTop() + nav_height;
		var home_line_scroll_from_top = $window.scrollTop();
		var numerator = (animation_area - scroll_position);
		var percentage = (numerator / animation_area);
		// var indicator_offset_top;
		// function indicator_width(which) {
		// 	if (which.length) {
		// 		indicator_offset_top = which.offset().top;
		// 	}
		// 	return ( 100 - ( 100 * ( (animation_area - ( indicator_offset_top + $nav_bar.outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' );
		// }
		if (scroll_from_top >= height_before_animation) {

			$content_indicator_backdrop.fadeIn(500);

			$stand_in.css( 'width', (100 - (percentage*100) + '%'));

		} else {

			$stand_in.css('width', '0');

			$content_indicator_backdrop.fadeOut(200);


			var home_line_percentage = ((home_line_height_before_animation - home_line_scroll_from_top)/home_line_height_before_animation);
			$home_line.css('width', (home_line_percentage*100 + '%'));

		}
}

// page indicator JS
// page indicator JS





// function next_section() {
// 	var bios = document.getElementById('team-bios');
// 	var no_of_bios = bios.getElementByClassName('bio').length;
// 	var count = 0;
// 	for (i = 0; i < no_of_bios; i++) {
//
// 	}
// }





// function third_nav() {
// 	if ((($contact_section.offset().top - $nav_bar.outerHeight()) <= $window.scrollTop()) && window.matchMedia("(orientation: landscape)").matches) {
// 		document.getElementById('forward').href = "#footer";
// 		document.getElementById('back').href = "#team";
// 		// document.getElementById('down').href = "contact.html";
//
// 	} else if ((($team_section.offset().top - $nav_bar.outerHeight()) <= $window.scrollTop()) && window.matchMedia("(orientation: landscape)").matches) {
// 		document.getElementById('forward').href = "#contact";
// 		document.getElementById('back').href = "#services";
// 		// document.getElementById('down').href = "team.html";
// 	} else if ((($services_section.offset().top - $nav_bar.outerHeight()) <= $window.scrollTop()) && window.matchMedia("(orientation: landscape)").matches) {
// 		document.getElementById('forward').href = "#team";
// 		document.getElementById('back').href = "#top";
// 		// document.getElementById('down').href = "services.html";
// 	} else if (window.matchMedia("(orientation: landscape)").matches) {
// 		document.getElementById('forward').href = "#services";
// 		document.getElementById('back').href = "#top";
// 	}
// }

function check_if_line_touches() {
	var nav_height = $nav_bar.outerHeight();
	var nav_top_position = $window.scrollTop();
	var nav_bottom_position = (nav_top_position + nav_height);
	var $element = $home_line;
	var element_top_position = $element.scrollTop();

	if (element_top_position <= nav_bottom_position) {
		$stand_in.show();
	} else if (element_top_position <= origin_top) {
		$stand_in.hide();
	}
}

// function desktop_banners() {
// 	if (window.matchMedia("(min-width: 1024px)").matches) {
// 		$team_banner.mouseover(function() {
// 			$(this).addClass('future-lettering');
//
// 		});
// 		$team_banner.mouseleave(function() {
// 			$(this).removeClass('future-lettering');
//
// 		});
// 	}
// }

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		// check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		}
		// else {
		// 	$element.removeClass('in-view');
		// }
	});
	if ((($window.scrollTop() < 125) && window.matchMedia("(orientation: landscape)").matches) || (($window.scrollTop() > ($document.height() - $window.height() - $footer.height() - $nav_bar.height())) && window.matchMedia("(orientation: landscape)").matches)) {
		// $home_nav.slideUp(300);
	} else {
		// $home_nav.slideDown(300);
		$('landscape-blue-line').css('width', '100%');
	}
	if ($('.all-content').width() !== 1024) {
		if ((window.matchMedia("(orientation: landscape)").matches) && ($window.scrollTop() < 125)) {
			$('.quiver').fadeOut(300);
		} else if (window.matchMedia("(orientation: landscape)").matches) {
			$('.quiver').fadeIn(300);
		} else {
			$('.quiver').css('display', 'none');
		}
	}


	// if ($('.quiver').hasClass('landscape-only')) {
	// 	if ($window.scrollTop() < 125) {
	//
	// 	} else {
	//
	// 	}
	// }


	// if ((($window.scrollTop() < 125) && window.matchMedia("(orientation: landscape)").matches) || (($window.scrollTop() > ($document.height() - $window.height() - $footer.height() - $nav_bar.height())) && window.matchMedia("(orientation: landscape)").matches)) {
	// 	// $home_nav.slideUp(300);
	// } else {
	// 	// $home_nav.slideDown(300);
	// 	$('landscape-blue-line').css('width', '100%');
	// }
	// if (window.matchMedia("(orientation: landscape)").matches) {
	// 	$('.quiver').addClass('landscape-only');
	// } else {
	// 	$('.quiver').removeClass('landscape-only');
	// }
	//
	// if ($('.quiver').hasClass('landscape-only')) {
	// 	if ($window.scrollTop() < 125) {
	// 		$('.quiver').fadeOut(300);
	// 	} else {
	// 		$('.quiver').fadeIn(300);
	// 	}
	// }


	if ($body.hasClass('home-page')) {
		// third_nav();
		check_if_line_touches();
		page_indicator();
		// desktop_banners();

	}



	}



// function check_if_line_touches() {
// 	var nav_height = $nav_bar.outerHeight();
// 	// var window_height = $window.height();
// 	var nav_top_position = $window.scrollTop();
// 	var nav_bottom_position = (nav_top_position + nav_height);

// 	$.each($animation_line_elements, function() {
// 		var $element = $(this);
// 		// var element_height = $element.outerHeight();
// 		var element_top_position = $element.offset().top;
// 		// var element_bottom_position = (element_top_position + element_height);

// 		// check to see if this current container is within viewport

// 		if (element_top_position <= nav_bottom_position) {
// 			// $element.addClass('affix-me');
// 			$stand_in.show();
// 		} else if (element_top_position <= origin_top) {
// 			$stand_in.hide();
// 		}
// 	});
// }



var leaveCounter = 0;

function leadIn() {
	setTimeout(function() {
		(function() {
			var altName = $( ".alt-name" );
			var nameIndex = -1;
			function showNextName() {
				++leaveCounter;
				if (leaveCounter === 7) {
					altName.eq((nameIndex % altName.length) + 1).fadeIn(300);
					return 0;
				}
				++nameIndex;
				altName.eq(nameIndex % altName.length)
					.fadeIn(250)
					.delay(250)
					.fadeOut(250, showNextName);
			}

			showNextName();


		})();

		setTimeout(function() {
				// $( ".alt-name" ).css("transform", "translateX(-56%)");
			// $and_more.css("transform", right);
			// $studios.css("transform", left);
			$studios.animate({opacity: "1"}, 1200);
		}, 5000);
		$line.animate({width: "100%"}, 4600, function() {
			// $( ".line" ).css("transition", "all 1.5s linear");
			// $( ".line" ).css("background", "#E4E4E4");
			setTimeout(function() {
				$line.addClass('line-index-motion');
				$('.studios').addClass('down-move');
				$('.and-more').addClass('spacing');
				setTimeout(function() {
						$('.studios').addClass('stalled-spacing');
				}, 400);






			}, 400);
		});
	}, 400);
}



$(document).ready(function() {

	$window.on('scroll', check_if_in_view);
	$window.on('resize', check_if_in_view);
	// $window.on('scroll', check_if_line_touches);
	// $window.on('scroll resize', check_if_line_touches);
	// $window.on('scroll resize', page_indicator).trigger('scroll');
	$window.trigger('scroll');
	// if (window.matchMedia("(orientation: landscape)").matches) {
	// 	$window.trigger('resize');
	// }
	setTimeout(function() {
		$( ".home-line-inner-case" ).animate({width: "100%"}, 600);
	}, 300);

	$('.white-overlay-home').fadeOut(750);
	if ($body.hasClass('landing')) {
		leadIn();
	}

	// if (window.matchMedia( "(min-width: 1024px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( #fff 93%, transparent");
	//
	//
	// } else if (window.matchMedia( "(max-width: 1023px) and (min-width: 466px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( left, #fff 93%, transparent");
	//
	// } else if (window.matchMedia( "(max-width: 465px) and (min-width: 414px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( left, #fff 94%, transparent");
	//
	// } else {
	// 	leadIn("-webkit-linear-gradient( left, #fff 94%, transparent");
	//
	// }

	// $window.on('scroll', function() {
	// 		nav_height = $(".nav-bar").outerHeight();
	// 		height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
	// 		page_indicator();
	//
	// });
	// $window.on('resize', function() {
	// 		nav_height = $(".nav-bar").outerHeight();
	// 		height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
	// 		page_indicator();
	//
	// });

// $tap_disappear.click(function() {
// 	$tap_anywhere_wrapper.hide('slow');
// });

	$enter_button.click(function(e) {
		e.preventDefault();
		$enter_button.css("transition", "transform .25s cubic-bezier(0, 1, 0, 1), opacity .25s linear").css("transform", "scale(.1, .1)").css("opacity", 0);
		// setTimeout(function() {
			$white_overlay.fadeIn(750);
			$landing_intro.css("transition", "all .75s cubic-bezier(1, 0, 1, 0)").css("transform", "scale(.1, .1)");
		// }, 100);

		// setTimeout(function() {
		// 	$(".enter-button").css("transition", "opacity 250ms ease").css("opacity", "0");
		// }, 25);
		setTimeout( function() {
				document.location.assign("/home.html");
		}, 850);
	});



	$next_button_brand_sub.click(function() {
		if ($(this).hasClass('services-next')) {
			$('.services-containing-container').find($all_animation_elements).removeClass('animation-element');
		} else if ($(this).hasClass('team-next')) {
			$('.team-content, .services-containing-container').find($all_animation_elements).removeClass('animation-element');
		} else if ($(this).hasClass('contact-next')) {
			$all_animation_elements.removeClass('animation-element');
		}
		// $all_animation_elements.removeClass('animation-element');
		$html_body.animate({ scrollTop: ($( $(this).attr('href') ).offset().top) }, 'slow');
		return false;
	});
	// $('#back').click(function() {
	// 	$html_body.animate({ scrollTop: ($( $(this).attr('href') ).offset().top) }, 'slow');
	// });

	$menu_button.click(function() {
		if ($menu.css('display') === 'block') {
			$menu.slideUp( 200 );
			$click_catcher.hide();
		} else {
			$menu.slideDown( 200 );
			$click_catcher.show();
		}

	});
	$click_catcher.click(function() {
		$menu.slideUp( 500 );
		$click_catcher.hide();
	});

	$arrow_and_name.click(function() {
		$html_body.animate({ scrollTop: 0 }, "slow");
		return false;
	});




	if ($body.hasClass("services-body")) {

	$id_one_six.click(function() {

		if (($window.scrollTop() >= ($id_6.offset().top - 5))) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);
		}
		else if (($window.scrollTop() >= ($id_5.offset().top - 5)) && ($window.scrollTop() < $id_6.offset().top)) {
			$html_body.animate({ scrollTop: $id_6.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_4.offset().top - 5)) && ($window.scrollTop() < $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_3.offset().top - 5)) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_2.offset().top - 5)) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_1.offset().top - 5)) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if ($window.scrollTop() < ($id_1.offset().top) - 5) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	$left_nav.click(function() {

		if ($window.scrollTop() > ($id_6.offset().top)) {
			$html_body.animate({ scrollTop: $id_6.offset().top }, 600);
		}
		else if (($window.scrollTop() > ($id_5.offset().top)) && ($window.scrollTop() <= $id_6.offset().top)) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		}
		else if (($window.scrollTop() > ($id_4.offset().top)) && ($window.scrollTop() <= $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		}
		else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		}
		else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= ($id_1.offset().top))) {
			$html_body.animate({ scrollTop: 0 }, 600);

		}
	});
} else if ($body.hasClass('team-body')) {

	$id_one_five.click(function() {
		if ($window.scrollTop() >= $id_5.offset().top - 5) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);

		} else if (($window.scrollTop() >= ($id_4.offset().top - 5)) && ($window.scrollTop() < $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		} else if (($window.scrollTop() >= $id_3.offset().top - 5) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() >= $id_2.offset().top - 5) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= $id_1.offset().top - 5) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() >= 0) && ($window.scrollTop() < $id_1.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	$left_nav.click(function() {
		if (($window.scrollTop() > ($id_5.offset().top))) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_4.offset().top)) && ($window.scrollTop() <= $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= ($id_1.offset().top))) {
			$html_body.animate({ scrollTop: 0 }, 600);

		}
	});
} else {
	$id_one_four.click(function() {
		if ($window.scrollTop() >= ($id_4.offset().top - 5)) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);

		} else if (($window.scrollTop() >= ($id_3.offset().top - 5)) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_2.offset().top - 5)) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_1.offset().top - 5)) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() >= 0) && $window.scrollTop() < ($id_1.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	$left_nav.click(function() {
		if ($window.scrollTop() > ($id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= $id_1.offset().top)) {
			$html_body.animate({ scrollTop: 0 }, 600);

		}
	});
}









// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) {
//       e.preventDefault();
//   }
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

// function disableScroll() {
//   if (window.addEventListener) {
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   }
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//     if (window.removeEventListener) {
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     }
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }





	// $(".show-rest").click(function() {
	// 	disableScroll();
	// 	$('html, body').animate({ scrollTop: ($document.outerHeight() - $window.outerHeight())}, 300, function() {
	// 		enableScroll();
	// 	});
	// 	$('.show-rest').fadeOut(300);
	// 	return false;
	// });
	// $(".top-of-next").click(function() {
	// 	disableScroll();
	// 	$('html, body').animate({ scrollTop: ($(this).offset().top)}, 300, function() {
	// 		enableScroll();
	// 	});
	// 	return false;
	// });

	// $(window).scroll(function(){
	// 	if ($(window).scrollBottom() < 300) {
	// 		$(".smooth").fadeIn(500);
	// 	}
	// 	else {
	// 		$(".smooth").fadeOut(500);
	// 	}
	// });

	$window.scroll(function() {
		if (($window.scrollTop() > 1) && ($menu.css( 'display' ) === 'block')) {
			$menu.slideUp(300);
			$click_catcher.hide();
		}
	});
	// $('.sidebar-member').on('mouseenter', function() {
	// 	$(this).find('.sidebar-indicator').addClass('testicles');
	// 	// $(this).find('.sidebar-indicator').animate({width: "10px"}, 200);
	// }).on('mouseleave', function() {
	// 	$(this).find('.sidebar-indicator').removeClass('testicles');


	// });


	// $( ".desktop-menu-item").hover(function() {
	// 	$( ".desktop-menu-item" ).toggleClass("unselected-menu-item");
	// });
	// $( ".foot-item").hover(function() {
	// 	$( ".foot-item" ).toggleClass("unselected-foot-item");
	// });
	// $( ".contact-foot-item").hover(function() {
	// 	$( ".contact-foot-item" ).toggleClass("contact-unselected-foot-item");
	// });



// page indicator function call
// page indicator function call

// page indicator function call
// page indicator function call



	// PARTNERS BAND JS (GROW & SHRINK)
	// PARTNERS BAND JS (GROW & SHRINK)


	$( ".partner" ).click(function() {

		if ($(this).hasClass("downscaled-partner")) {

			$(".scaled-partner").addClass("downscaled-partner").removeClass("scaled-partner");
			$(this).addClass("scaled-partner").removeClass("downscaled-partner");

		} else if ($(this).hasClass("scaled-partner")) {

			$(".downscaled-partner").addClass("partner").removeClass("downscaled-partner");
			$(this).addClass("partner").removeClass("scaled-partner");

		} else {

			$(this).addClass("scaled-partner").removeClass("partner");
			$(".partner").addClass("downscaled-partner");
			$(this).addClass("partner");

		}

	});


	// PARTNERS JS (CLICK AWAY TO NEGATE EFFECT)

	$(".partner").click(function() {

		if ($(this).hasClass("downscaled-partner")) {
			$(".click-catcher-2").show();
		} else if (!$(this).hasClass("scaled-partner") && (!$(this).hasClass("downscaled-partner"))) {
			$(".click-catcher-2").hide();
		} else {
			$(".click-catcher-2").show();
		}

	});

	$(".click-catcher-2").click(function() {

		$(".partner").removeClass("scaled-partner").removeClass("downscaled-partner");
		$(".click-catcher-2").hide();

	});

	// PARTNERS JS (CLICK AWAY TO NEGATE EFFECT)


	// PARTNERS BAND JS (GROW & SHRINK)
	// PARTNERS BAND JS (GROW & SHRINK)


});
