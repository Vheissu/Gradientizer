
## Gradientizer
### CSS3 gradients for jQuery

For some reason jQuery out of the box doesn't make it easy to add gradients to elements. Sure you can add in a whole bunch of CSS style overrides for each browser, but who has time to do that? Enter Gradientizer. It might not be the prettiest or most moral plugins of them all out there, but it works. Essentially this colour allows you to add cross-browser gradients to your sites, with support for multiple colours (as shown in our example) as well as gradient direction (vertical or horizontal).

There are future plans for feature detection, but the plugin works great as it stands.

The Gradientizer plugin relies on CSS3 gradients, so not all browsers support these and will fallback to a flat colour if not supported. There is no support for browsers that do not support CSS3 gradients and never will be, so if this is a concern then you are in the wrong neighbourhood boy and this plugin isn't fo' you. To see what browsers support CSS3 gradients, check <a href="http://caniuse.com/css-gradients">this helpful link</a> out.

## Example Usage

Ensure you have included jQuery first before using Gradientizer.

<pre>
	<code>
	(function($) {

		// The new cool way to write document.ready
		$(function() {

			$("#somediv").gradientizer({
				direction: 'horizontal',
				colors: [
				  {
				    '0%': 'red',
				    '10%': 'yellow',
				    '20%': 'pink',
				    '30%': 'green',
				    '40%': 'purple',
				    '50%': 'orange',
				    '70%': 'blue',
				    '80%': 'magenta',
				    '90%': 'cyan',
				    '100%': 'indigo'
				  }
				]
			});

		});
	})(jQuery);
	</code>
</pre>

## Contribute

Please contribute if you have ideas. This plugin really fills a void that endless Googling couldn't fill.