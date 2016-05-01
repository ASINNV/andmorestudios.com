$(document).ready(function() {
	$( ".line" ).animate({width: "36%"}, 1400, function() {
		$( ".enter-button" ).fadeIn( 500 );
	});
	$( ".menu-button" ).click(function() {
		$( ".menu" ).toggle();
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
	
	
});