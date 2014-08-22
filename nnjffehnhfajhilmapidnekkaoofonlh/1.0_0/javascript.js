$('body').addClass('redesigned');

$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>$('.narrow_column').height()+110) {
            $('.post').addClass('scroll');
            $('#content .wide_column').addClass('scroll');
        } else {
            $('.post').removeClass('scroll');
            $('#content .wide_column').removeClass('scroll');
        };
    });
});