$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

var leaveCounter = 0;
$(document).ready(function() {
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
	$( ".line" ).animate({width: "26%"}, 6600, function() {
		setTimeout(function() {
				
			$( ".enter-button" ).fadeIn( 300 );	
				
		}, 600);
	});
	$( ".menu-button" ).click(function() {
		$( ".menu" ).slideToggle( 500 );
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
			$( ".menu" ).slideUp(100);
		}	
	});
	
});