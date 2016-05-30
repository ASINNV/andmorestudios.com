$.fn.scrollBottom = function() {return $(document).height() - this.scrollTop() - this.height();
};





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


var $contact_section = $('.contact-section');
var $team_content = $('.team-content');
var $services_section = $('.services-section');
var $nav_bar = $('.nav-bar');
// for height of indicator line
var $welcome_logo_box = $('.welcome-logo-box');
var $brand_head = $('.brand-head');
var $stand_in = $('.stand-in');
var $home_line = $('.home-line');

var $and_more = $('.and-more');
var $studios = $('.studios');
var $line = $('.line');

var $indicator_container = $('.indicator-container');
var $content_indicator_backdrop = $('.content-indicator-backdrop');
var $content_indicator_1 = $('.content-indicator-1');
var $content_indicator_2 = $('.content-indicator-2');
var $content_indicator_3 = $('.content-indicator-3');


var $animation_line_elements = $('.animation-line-element');
var $animation_elements = $('.animation-element');
var $window = $(window);
var $document = $(document);

// the point at which indicator line appears on screen
var origin_top = $window.scrollTop() + $nav_bar.outerHeight() + $indicator_container.outerHeight() + $welcome_logo_box.outerHeight(true) + $brand_head.outerHeight() + 7.5;

// var origin_bottom = origin_top + $('.home-line').outerHeight();


// page indicator JS
// page indicator JS

	var nav_height = $nav_bar.outerHeight();
	var height_before_animation = nav_height + $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5;
	var home_line_height_before_animation = $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5 - $indicator_container.outerHeight();

function page_indicator() {
		var animation_area = ($document.outerHeight() + nav_height + $indicator_container.outerHeight() - $window.outerHeight() - height_before_animation);
		
		var scroll_position = ($window.scrollTop() + nav_height + $indicator_container.outerHeight() - height_before_animation);
		var scroll_from_top = $window.scrollTop() + nav_height;
		var home_line_scroll_from_top = $window.scrollTop();
		var numerator = (animation_area - scroll_position);
		var percentage = (numerator / animation_area);
		var indicator_offset_top;
		function indicator_width(which) {
			if (which.length) {
				indicator_offset_top = which.offset().top;
			}
			return ( 100 - ( 100 * ( (animation_area - ( indicator_offset_top + $nav_bar.outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' );
		}
		if (scroll_from_top >= height_before_animation) {
			
			$indicator_container.fadeIn(500);
			$content_indicator_backdrop.fadeIn(500);
			$content_indicator_1.fadeIn(500);
			$content_indicator_1.css('width', indicator_width($team_content) );
			$content_indicator_2.fadeIn(500);
			$content_indicator_2.css('width', indicator_width($services_section) );
			$content_indicator_3.fadeIn(500);
			$content_indicator_3.css('width', indicator_width($contact_section) );
			
			
			$stand_in.css( 'width', (100 - (percentage*100) + '%'));
			

		} else {

			$stand_in.css('width', '0');
			$indicator_container.fadeOut(200);
			$content_indicator_backdrop.fadeOut(200);
			$content_indicator_1.fadeOut(200);
			$content_indicator_2.fadeOut(200);

			var home_line_percentage = ((home_line_height_before_animation - home_line_scroll_from_top)/home_line_height_before_animation);
			$home_line.css('width', (home_line_percentage*100 + '%'));

		}
}

// page indicator JS
// page indicator JS


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
}


function check_if_line_touches() {
	var nav_height = $nav_bar.outerHeight();
	// var window_height = $window.height();
	var nav_top_position = $window.scrollTop();
	var nav_bottom_position = (nav_top_position + nav_height);

	$.each($animation_line_elements, function() {
		var $element = $(this);
		// var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		// var element_bottom_position = (element_top_position + element_height);

		// check to see if this current container is within viewport

		if (element_top_position <= nav_bottom_position) {
			// $element.addClass('affix-me');
			$stand_in.show();
		} else if (element_top_position <= origin_top) {
			$stand_in.hide();
		} 
	});
}



var leaveCounter = 0;

function leadIn(left, morePad, right, bg) {
	$and_more.css("background", bg);
	$and_more.css("padding-right", morePad);
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
					.fadeIn(300)
					.delay(300)
					.fadeOut(300, showNextName);
			}
				
			showNextName();

				
		})();

		setTimeout(function() {
				// $( ".alt-name" ).css("transform", "translateX(-56%)");
			$and_more.css("transform", right);
			$studios.css("transform", left);
			$studios.animate({opacity: "1"}, 1200);
		}, 6000);
		$line.animate({width: "100%"}, 6600, function() {
			// $( ".line" ).css("transition", "all 1.5s linear");	
			// $( ".line" ).css("background", "#E4E4E4");
			setTimeout(function() {
				$line.css("transition", "transform .6s ease-in-out").css("transform", "translateY(15px)");
				
					
						
			}, 600);
		});
	}, 600);
}



$(document).ready(function() {
	

	$window.on('scroll', check_if_in_view);
	$window.on('scroll resize', check_if_in_view);
	$window.on('scroll', check_if_line_touches);
	$window.on('scroll resize', check_if_line_touches);
	$window.on('scroll resize', page_indicator).trigger('scroll');
	$window.trigger('scroll');
	setTimeout(function() {
		$( ".home-line-inner-case" ).animate({width: "100%"}, 600);
	}, 900);

	$('.white-overlay-home').fadeOut(750);
	
	

	if (window.matchMedia( "(min-width: 975px)" ).matches) {
		leadIn("translateX(49.5%)", "20px", "translateY(-100%) translateX(-33%)", "-webkit-linear-gradient( left, #fff 93%, transparent");
		
		
	} else if (window.matchMedia( "(max-width: 974px) and (min-width: 466px)" ).matches) {
		leadIn("translateX(50%)", "12px", "translateY(-100%) translateX(-33.5%)", "-webkit-linear-gradient( left, #fff 93%, transparent");
		

	} else if (window.matchMedia( "(max-width: 465px) and (min-width: 414px)" ).matches) {
		leadIn("translate(50%)", "12px", "translateY(-100%) translateX(-33.5%)", "-webkit-linear-gradient( left, #fff 94%, transparent");
		

	} else {
		leadIn("translate(49%)", "12px", "translateY(-100%) translateX(-33%)", "-webkit-linear-gradient( left, #fff 94%, transparent");
		
	}

	$window.on('scroll', function() {
			nav_height = $(".nav-bar").outerHeight();
			height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
			page_indicator();
			
	});
	$window.on('resize', function() {
			nav_height = $(".nav-bar").outerHeight();
			height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
			page_indicator();

	});

	$(".enter-button").click(function(e) {
		e.preventDefault();
		$(".enter-button").css("transition", "transform .25s cubic-bezier(0, 1, 0, 1), opacity .25s linear").css("transform", "scale(.1, .1)").css("opacity", 0);
		// setTimeout(function() {
			$('.white-overlay').fadeIn(750);
			$('.landing-intro').css("transition", "all .75s cubic-bezier(1, 0, 1, 0)").css("transform", "scale(.1, .1)");
		// }, 100);
		
		// setTimeout(function() {
		// 	$(".enter-button").css("transition", "opacity 250ms ease").css("opacity", "0");	
		// }, 25);
		setTimeout( function() {
				document.location.assign("/home.html");
		}, 850);
	});

	$(".next-button, .brand-sub").click(function() {
		$('html, body').animate({ scrollTop: ($( $(this).attr('href') ).offset().top - nav_height) }, 600);
		return false;
	});
	

	$( ".menu-button" ).click(function() {
		if ($( ".menu" ).css('display') === 'block') {
			$( ".menu" ).slideUp( 300 );	
			$( ".clickCatcher" ).hide();
		} else {
			$( ".menu" ).slideDown( 300 );
			$( ".clickCatcher" ).show();	
		}
		
	});
	$( ".clickCatcher" ).click(function() {
		$( ".menu").slideUp( 500 );
		$( ".clickCatcher" ).hide();
	});
	
	

	
	$(".smooth").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});














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

	$(window).scroll(function(){
		if ($(window).scrollBottom() < 300) {
			$(".smooth").fadeIn(500);
		} 
		else {
			$(".smooth").fadeOut(500);
		}
	});

	$(window).scroll(function() {
		if (($(window).scrollTop() > 1) && ($( ".menu" ).css( 'display' ) === 'block')) {
			$( ".menu" ).slideUp(300);
			$( ".clickCatcher" ).hide();
		}	
	});
	$( ".desktop-menu-item").hover(function() {
		$( ".desktop-menu-item" ).toggleClass("unselected-menu-item");
	});
	$( ".foot-item").hover(function() {
		$( ".foot-item" ).toggleClass("unselected-foot-item");
	});
	$( ".contact-foot-item").hover(function() {
		$( ".contact-foot-item" ).toggleClass("contact-unselected-foot-item");
	});



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










