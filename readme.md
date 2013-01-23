
## Gradientizer
### CSS3 gradients for jQuery

For some reason jQuery out of the box doesn't make it easy to add gradients to elements. Sure you can add in a whole bunch of CSS style overrides for each browser, but who has time to do that? Enter Gradientizer. It might not be the prettiest or most moral plugins of them all out there, but it works. Essentially all this plugin does is allows you to specify a starting and ending colour value as well as gradient direction (vertical or horizontal).

There are future plans such as feature detection and support for more than 2 gradient colours such as being able to specify a third colour showing at 75% of the gradient. You can easily code this in yourself if you need it, but at present this plugin doesn't support it.

## Example Usage

Ensure you have included jQuery first before using Gradientizer.

(function($) {

	// The new cool way to write document.ready
	$(function() {

		$("#somediv").gradientizer({
			from: '#000000',
			to: '#FFFFFF'  
		});

	});
})(jQuery);

## Contribute

Please contribute if you have ideas. This plugin really fills a void that endless Googling couldn't fill.