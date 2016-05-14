$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

var leaveCounter = 0;

if (!localStorage.getItem('page')) {
	localStorage.setItem('page', 'index.html');	
} else if (window.location === "studio3.xyz/index.html") {
	window.location.replace("home.html");
}


$(document).ready(function() {

	// $( ".enter-button" ).click(function() {
	// 	window.location = "home.html";	
	// 	$( ".landing-logo-box").addClass("spinnies");
	// });
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
			$( ".studios" ).animate({opacity: "1"}, 300);
		}, 6300);
		$( ".line" ).animate({width: "200px"}, 6600, function() {
			$( ".line" ).css("transition", "all 2s ease");	
			$( ".line" ).css("background", "#40C6FF");
			setTimeout(function() {
					
				$( ".enter-button" ).fadeIn( 300 );	
					
			}, 300);
		});
	}, 600);
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

});










