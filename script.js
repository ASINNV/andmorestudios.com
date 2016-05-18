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
			} else {
				$element.removeClass('in-view');
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





// function atBottom() {

// 	var bottomOfWindow = $(window).scrollTop() + $(window).height();
// 	var bottomOfFoot = $( ".foot" ).offset().top + $( ".foot" ).outerHeight();

// 	if (bottomOfWindow === bottomOfFoot) {
// 		$( ".trans-div" ).animate({height: $( ".foot" ).outerHeight()});
// 	} else {
// 		return null
// 	}
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
		$( ".menu" ).slideToggle( 500 );
		$( ".clickCatcher" ).show();
	});
	$( ".clickCatcher" ).click(function() {
		$( ".menu").slideUp( 500 );
		$( ".clickCatcher" ).hide();
	});
	
	$('a').click(function() {
		if ( $( ".menu" ).css( 'display' ) === 'block' ) {
			$( ".menu" ).toggle();
		}
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1200);
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

	// PARTNERS BAND JS
	// PARTNERS BAND JS
	$( ".partner" ).click(function() {
		if ($(this).hasClass("partner")) {
			$(this).addClass("scaled-partner").removeClass("partner");	
			$(".partner").addClass("downscaled-partner").removeClass("partner");


		} else if ($(this).hasClass("downscaled-partner")) {
			$(".scaled-partner").addClass("downscaled-partner").removeClass("scaled-partner");
			$(this).addClass("scaled-partner").removeClass("downscaled-partner");

		} else {
			$(".downscaled-partner").addClass("partner").removeClass("downscaled-partner");
			$(".scaled-partner").addClass("partner").removeClass("scaled-partner");
		}
	});
	// PARTNERS BAND JS
	// PARTNERS BAND JS

	

	

	// $(window).scroll(function () {
	// 	if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
	// 		$( ".trans-div" ).animate({height: $( ".foot" ).outerHeight()});
	// 		$( ".foot" ).animate({opacity: 1});
	// 	} 
	// });

	
	// $(window).scrollTop( function() {
	// 	if (($(window).offSet().top + 80) >= $('.section-header').offSet().top) {
	// 		$('.section-header').css("position", "fixed");
	// 		alert("face");
	// 	}
	// });
	
});










