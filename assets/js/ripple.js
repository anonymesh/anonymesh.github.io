jQuery(document).ready(function(){
    "use strict";
    try {
		$('.slider').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	$('.js-ripples-disable').on('click', function() {
		$('.slider').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('.slider').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('.slider').ripples('pause');
	});
});
	