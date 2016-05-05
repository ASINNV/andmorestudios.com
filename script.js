$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};


$(document).ready(function() {
	$( ".line" ).animate({width: "36%"}, 1400, function() {
		$( ".enter-button" ).fadeIn( 1500 );
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