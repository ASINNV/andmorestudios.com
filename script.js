$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

var $animation_elements = $('.animation-element');
var $window = $(window);

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
			}, 6300);
			$( ".line" ).animate({width: "200px"}, 6600, function() {
				$( ".line" ).css("transition", "all 2s ease");	
				$( ".line" ).css("background", "#40C6FF");
				setTimeout(function() {
						
					$( ".enter-button" ).fadeIn( 300 );	
						
				}, 300);
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
	$window.trigger('scroll');

	if (window.matchMedia( "(min-width: 975px)" ).matches) {
		leadIn("translateX(46.5%)", "20px", "translateY(-100%) translateX(-36%)", "-webkit-linear-gradient( left, #fff 93%, transparent");
		// setTimeout(function() {
 	// 		$('.all-wrapper').animate({opacity: 1}, 500);
 	// 	}, 200);	
	} else if (window.matchMedia( "(max-width: 974px) and (min-width: 466px)" ).matches) {
		leadIn("translateX(50%)", "12px", "translateY(-100%) translateX(-34%)", "-webkit-linear-gradient( left, #fff 93%, transparent");

	} else if (window.matchMedia( "(max-width: 465px) and (min-width: 414px)" ).matches) {
		leadIn("translate(47%)", "12px", "translateY(-100%) translateX(-36.5%)", "-webkit-linear-gradient( left, #fff 94%, transparent");

	} else {
		leadIn("translateX(45%)", "12px", "translateY(-100%) translateX(-36%)", "-webkit-linear-gradient( left, #fff 93%, transparent");
	}

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

	$(".next-button").click(function() {
		$('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, 1200);
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

	$(".smooth").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
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










