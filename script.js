$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};
var $animation_line_elements = $('.animation-line-element');
var $animation_elements = $('.animation-element');
var $window = $(window);
var origin_top = $(window).scrollTop() + $(".nav-bar").outerHeight() + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
// var origin_bottom = origin_top + $('.home-line').outerHeight();


// page indicator JS
// page indicator JS

	var nav_height = $(".nav-bar").outerHeight();
	var height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;

function page_indicator() {
	var height_before_animation_home_line = $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
		var animation_area = ($(document).outerHeight() - $(window).outerHeight() - height_before_animation - 1);
		
		var scroll_position = ($(window).scrollTop() + nav_height - height_before_animation);
		var numerator = (animation_area - scroll_position);
		var percentage = (numerator / animation_area);
		if ($('.stand-in').css('display') === 'block') {
			
			$('.indicator-container').fadeIn(500);
			$('.content-indicator-backdrop').fadeIn(500);
			$('.content-indicator-1').fadeIn(500);
			$('.content-indicator-1').css('width', ( 100 - ( 100 * ( (animation_area - ( $('.team-content').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' ) );
			$('.content-indicator-2').fadeIn(500);
			$('.content-indicator-2').css('width', ( 100 - ( 100 * ( (animation_area - ( $('.services-section').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' ) );
			
			
			$('.stand-in').css( 'width', (100 - (percentage*100) + '%'));
			
		
		
			// if ( $('.stand-in').css('width') < ( 100 - ( 100 * ( (animation_area - ( $('.team-content').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 4 + '%' ) ){
			// 	$('.stand-in').css('background', '#f4a259');
			// } else if (      ( $('.stand-in').css('width') >= ( 100 - ( 100 * ( (animation_area - ( $('.team-content').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' ) ) && ( $('.stand-in').css('width') < ( 100 - ( 100 * ( (animation_area - ( $('.services-section').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 4 + '%' ) )       ) {
			// 	$('.stand-in').css('background', '#fff');
		
		
			
			
			// } else if (     ( $('.stand-in').css('width') >= ( 100 - ( 100 * ( (animation_area - ( $('.services-section').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' ) ) && ( $('.stand-in').css('width') < ( 100 - ( 100 * ( (animation_area - ( $('.contact-section').offset().top + $(".nav-bar").outerHeight() - height_before_animation ) )/animation_area ) ) - 4 + '%' ) )      ) {
			// 	$('.stand-in').css('background', '#6ed3c7');	
			// } else {
				
			// }
			

		} else {

			$('.stand-in').css('width', '0');
			$('.indicator-container').fadeOut(0);
			$('.content-indicator-backdrop').fadeOut(0);
			$('.content-indicator-1').fadeOut(0);
			$('.content-indicator-2').fadeOut(0);

			var home_line_percentage = ((height_before_animation_home_line - $(window).scrollTop())/height_before_animation_home_line);
			$('.home-line').css('width', (home_line_percentage*100 + '%'));

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
	var nav_height = $(".nav-bar").outerHeight();
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
			$(".stand-in").show();
		} else if (element_top_position <= origin_top) {
			$(".stand-in").hide();
		} 
	});
}



var leaveCounter = 0;

function leadIn(left, morePad, right, bg) {
	$( ".and-more" ).css("background", bg);
	$( ".and-more" ).css("padding-right", morePad);
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
				$( ".and-more" ).css("transform", right);
				$( ".studios" ).css("transform", left);
				$( ".studios" ).animate({opacity: "1"}, 1200);
			}, 6000);
			$( ".line" ).animate({width: "100%"}, 6600, function() {
				// $( ".line" ).css("transition", "all 1.5s linear");	
				// $( ".line" ).css("background", "#E4E4E4");
				setTimeout(function() {
					$('.line').css("transition", "transform .6s ease-in-out").css("transform", "translateY(15px)");
					setTimeout(function() {
					$( ".enter-button" ).fadeIn( 300 );
					}, 150);
					
						
				}, 600);
			});
		}, 600);
}
// if (!localStorage.getItem('page')) {
// 	localStorage.setItem('page', 'index.html');	
// } else if (window.location === "studio3.xyz/index.html") {
// 	window.location.replace("home.html");
// }


$(document).ready(function() {
	
	$window.on('scroll', check_if_in_view);
	$window.on('scroll resize', check_if_in_view);
	$window.on('scroll', check_if_line_touches);
	$window.on('scroll resize', check_if_line_touches);
	$window.on('scroll', page_indicator);
	$window.on('scroll resize', page_indicator);
	$window.trigger('scroll');
	setTimeout(function() {
		$( ".home-line-inner-case" ).animate({width: "100%"}, 600);
	}, 300);

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
	$( ".menu-button" ).click(function() {
		if ($( ".menu" ).css('display') === 'block') {
			$( ".menu" ).slideUp( 500 );	
			$( ".clickCatcher" ).hide();
		} else {
			$( ".menu" ).slideDown( 500 );
			$( ".clickCatcher" ).show();	
		}
		
	});
	$( ".clickCatcher" ).click(function() {
		$( ".menu").slideUp( 500 );
		$( ".clickCatcher" ).hide();
	});
	
	

	$(".next-button, .brand-sub").click(function() {
		$('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, 600);
		return false;
	});
	$(".smooth").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

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

	

	$(document).on('scroll', page_indicator);

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










