/*!
 * Gradientizer - CSS3 gradients using jQuery
 *
 * Version:  1.0
 * Released: 23-01-2013
 * Source:   http://github.com/Vheissu/Gradientizer
 * Plugin:   Gradientizer
 * Author:   Dwayne Charrington (dwaynecharrington@gmail.com)
 * License:  MIT Licence 
 *           http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2012 Dwayne Charrington.
 *
 * Simple usage:
 *
 * $("#somediv").gradientizer({
 *     from: '#000000',
 *     to: '#FFFFFF'  
 * });
 *
 */
(function($) {

    $.fn.gradientizer = function(options) {

        options = $.extend({ from: '#000000', to: '#ffffff', direction: 'vertical'}, options || {});

        return this.each(function() {
            var $this = $(this);

            switch (options.direction) {

                case 'vertical':
                    // You would think this would merely overwrite but it actually works
                    $this.css('background', 'linear-gradient(top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-webkit-linear-gradient(top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-o-linear-gradient(top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-moz-linear-gradient(top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-ms-linear-gradient(top, '+options.from+' 0%, '+options.to+' 100%)');
                break;

                case 'horizontal':
                    // You would think this would merely overwrite but it actually works
                    $this.css('background', 'linear-gradient(right top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-webkit-linear-gradient(right top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-o-linear-gradient(right top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-moz-linear-gradient(right top, '+options.from+' 0%, '+options.to+' 100%)');
                    $this.css('background', '-ms-linear-gradient(right top, '+options.from+' 0%, '+options.to+' 100%)');
                break;

            }

        });
    };

})(jQuery);