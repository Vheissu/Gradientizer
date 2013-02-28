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
 * Copyright (c) 2013 Dwayne Charrington.
 *
 * Simple usage:
 *
 * $("#somediv").gradientizer({
 *     direction: 'horizontal',
 *     colors: [
 *         {
 *           '0%': 'red',
 *           '10%': 'yellow',
 *           '20%': 'pink',
 *           '30%': 'green',
 *           '40%': 'purple',
 *           '50%': 'orange',
 *           '70%': 'blue',
 *           '80%': 'magenta',
 *           '90%': 'cyan',
 *           '100%': 'indigo'
 *         }
 *     ]
 * });
 *
 */
(function($) {

    $.fn.gradientizer = function(options) {

        var defaults = {
            direction: 'vertical',
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
        };

        // Merge defaults and options into the one settings object
        options = $.extend({}, defaults, options); 

        return this.each(function() {
            var $this = $(this);

            console.log(createCssString());

            switch (options.direction) {

                case 'vertical':
                    // Default background colour for browsers that don't support shit
                    $this.css('background', ''+options.colors[0]['0%']+'');

                    $this.css('background', 'linear-gradient(top, '+createCssString()+')');
                    $this.css('background', '-webkit-linear-gradient(top, '+createCssString()+')');
                    $this.css('background', '-o-linear-gradient(top, '+createCssString()+')');
                    $this.css('background', '-moz-linear-gradient(top, '+createCssString()+')');
                    $this.css('background', '-ms-linear-gradient(top, '+createCssString()+')');
                break;

                case 'horizontal':
                    // Default background colour for browsers that don't support shit
                    $this.css('background', ''+options.colors[0]['0%']+'');

                    $this.css('background', 'linear-gradient(right top, '+createCssString()+')');
                    $this.css('background', '-webkit-linear-gradient(right top, '+createCssString()+')');
                    $this.css('background', '-o-linear-gradient(right top, '+createCssString()+')');
                    $this.css('background', '-moz-linear-gradient(right top, '+createCssString()+')');
                    $this.css('background', '-ms-linear-gradient(right top, '+createCssString()+')');
                break;

            }

        });

        function createCssString() {
            var finalOutput = '';

            $.each(options.colors[0], function(key, value) {
                finalOutput += ""+value+" "+key+", ";
            });

            finalOutput = $.trim(finalOutput);

            return finalOutput.replace(/,+$/,'');
        }

    };

})(jQuery);