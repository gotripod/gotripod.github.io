jQuery(document).ready(function ($) {
	function scrollTo(target) {
	    var targetPosition = $(target).offset().top;
	    $('html,body').animate({
	        scrollTop: targetPosition
	    }, 'slow');
	}

	$("ul#quotes").quote_rotator();
	
	$("#header-navigation").sticky({topSpacing:0});

	$('#navigation a').click(function() {
		scrollTo($(this).attr('href').replace('/', ''));
	});

	$('#header-navigation select').change(function() {
		var val = this.value;

		if(val.indexOf('.') === -1) {
			scrollTo(val);
		} else {
			window.location.href = val;
		}
	});
});