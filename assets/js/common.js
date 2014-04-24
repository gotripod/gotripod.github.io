jQuery(document).ready(function ($) {
	$('#header-navigation select').change(function() {
		var val = this.value;

		if(val.indexOf('/') === -1) {
			scrollTo(val);
		} else {
			window.location.href = val;
		}
	});
});