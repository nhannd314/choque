/**
 * Created by nhan on 30/03/2017.
 */
jQuery(document).ready(function() {
    jQuery(window).on('scroll', function () {
        var scrollTop = jQuery(window).scrollTop()
        if (scrollTop > 300) {
            jQuery("#header").addClass("stick")
        }
        else {
            jQuery("#header").removeClass("stick");
        }
    })
})