$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.img_box').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/3 ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});
