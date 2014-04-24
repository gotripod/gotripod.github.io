jQuery(document).ready(function ($) {
	function scrollTo(target) {
		target = target.replace('/', '');

	    var targetPosition = $(target).offset().top;
	    $('html,body').animate({
	        scrollTop: targetPosition
	    }, 'slow');
	}

	window.setTimeout(function() {
		$('#googleMaps').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40886.830442687766!2d-5.127996999999958!3d50.17185400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b16307846c97b%3A0x6b783d3b216b6f4d!2sGo+Tripod+Ltd!5e0!3m2!1sen!2s!4v1398110943195" width="100%" height="300" frameborder="0" style="border:0"></iframe>');
	}, 5000);
	

	$("ul#quotes").quote_rotator();
	
	$("#header-navigation").sticky({topSpacing:0});

	$('#navigation a').click(function() {
		scrollTo($(this).attr('href'));
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
