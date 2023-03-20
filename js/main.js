/* popup */
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };
    
    $('.linebox .today').click(function(){
        setCookie('maindiv','done',1);
        
        $('.popup').fadeOut('fast');
    });
    
    $('.linebox .popupclose').click(function(){
        $('.popup').fadeOut('fast');
    });
    
    cookiedata = document.cookie; 
    if(cookiedata. indexOf('maindiv=done') < 0 ){
        $('.popup').css('display','block');
    }else{
        $('.popup').css('display','none');
    }
});

/* mslider */
$(document).ready(function(){
    $('.mslider .slider').bxSlider({
        auto: true,
        speed: 500,
        pause: 7000,
        mode: 'horizontal',
        onSliderLoad: function(){
            $('.mslider li div').addClass('on');
        },
        onSlideBefore: function(){
            $('.mslider li div').removeClass('on');
        },
        onSlideAfter: function(){
            $('.mslider li div').addClass('on');
        }
    });
});

/* bestmenu */
$(document).ready(function(){
    $('.bestmenu .slider').bxSlider({
        pause: 7000,
        mode: 'fade'
    });
});

/* gallery */
$(document).ready(function(){
    var swiper = new Swiper('.gallery .swiper-container', {
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 1024px
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 60
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
});

/* deli */
$(document).ready(function(){
    var swiper = new Swiper('.deli .swiper-container', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,  
        },
        breakpoints: {
            // when window width is >= 1024px
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 23
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
                spaceBetween: 0
            },
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                spaceBetween: 0
            }
        }
    });
});

/* beans */
$(document).ready(function(){
    $('.beansimage li').fadeOut(0);
    $('.beanstext li').fadeOut(0);
    
    $('.beansline .lineimage01').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage01').fadeIn('fast');
        $('.beanstext .beanstext01').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    $('.beansline .lineimage02').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage02').fadeIn('fast');
        $('.beanstext .beanstext02').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    $('.beansline .lineimage03').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage03').fadeIn('fast');
        $('.beanstext .beanstext03').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    $('.beansline .lineimage04').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage04').fadeIn('fast');
        $('.beanstext .beanstext04').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    $('.beansline .lineimage05').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage05').fadeIn('fast');
        $('.beanstext .beanstext05').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    $('.beansline .lineimage06').click(function(){
        $('.beansimage li').fadeOut(0);
        $('.beanstext li').fadeOut(0);
        $('.beansimage .beansimage06').fadeIn('fast');
        $('.beanstext .beanstext06').fadeIn('fast');
        $('.beansline li').removeClass('on');
        $(this).addClass('on');
    });
    
    $('.beansline .lineimage01').trigger('click');
});
