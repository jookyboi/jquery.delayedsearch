/*
    jquery.delayedsearch.js

    Purpose:            Adds functionality to an input box to delay a function call
                        for a set number of milliseconds after the user has stopped
                        typing.

    Version:            1.0.0
    Dependencies:       jQuery 1.4.2+

    Author:             Rui Jiang
    Email:              rui@roowii.net
    Created:            3/28/2011
    Last-modified:      4/24/2011
    License:            MIT license
*/

(function($) {
    $.fn.extend({
        delayedsearch: function(options) {
            var settings = {
                delay: 500,
                call: function() {}
            };

            settings = $.extend(settings, options);

            var $inputbox = $(this);
            var timer = null;

            $inputbox.keydown(function(event) {
                // stop the last keydown from kicking off
                if (timer !== null)
                    clearTimeout(timer);

                timer = setTimeout(function() {
                    settings.call($inputbox.val());
                }, settings.delay);
            });

            return this;
        }
    });
})(jQuery);