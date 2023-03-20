/* totop */
$(document).ready(function(){
    $().UItoTop({ easingType:'easeOutQuart'});
});

/* header */
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        $('header').scrollTop(function(){
            if(top <= 0){
                $(this).removeClass('on');
                $('.subnav, .subbg').removeClass('active');
            }else{
                $(this).addClass('on');
                $('.subnav, .subbg').addClass('active');
            }
        });
    });
    
    $('.subbg').stop().slideUp(0); 
    $('.subnav').stop().slideUp(0); 
    
    $('.gnb').hover(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    }, function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    });
    
    $('.gnb > li > a').focus(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    });
    $('.rightnav .login a').focus(function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    });
    $('.sub01').prev().keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $('.subnav, .subbg').stop().slideUp('fast');
            }
        }
    });
});

/* panel */
$(document).ready(function(){
    var w = $('.panel').width();
    
    $('.panel').css('left', -w);
    $('.blackBg').fadeOut(0);
    $('.panel .psubnav').slideUp(0);
    
    $('header .tmenu').click(function(){
        $('.panel').stop().animate({
            left: 0
        },'fast',function(){
            $('html, body').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'fixed'
            });
        });
        $('.blackBg').fadeIn(0);
    });
    
    
    function close(speed){
        var w = $('.panel').width();
        
        $('.panel').stop().animate({
            left: -w
        }, speed, function(){
            $('html, body').css({
                width: '100%',
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
        });
        $('.blackBg').fadeOut(0);
        $('.psubnav').stop().slideUp('fast');
        $('.panel h2').removeClass('on');
        $('.panel .pmicon').removeClass('on');
    }
    
    
    $('.panel .pclose').click(function(){
        close('fast');
    });
    
    $('.panel h2').click(function(){

        var is = $(this).next().next().is(':hidden');
        
        if(is){
            $('.psubnav').stop().slideUp('fast');
            $('.panel h2').removeClass('on');
            $('.panel .pmicon').removeClass('on');
            $(this).next().next().stop().slideDown('fast');
            $(this).next().addClass('on');
            $(this).addClass('on');
        }else{
            $(this).next().next().stop().slideUp('fast');
            $(this).next().removeClass('on');
            $(this).removeClass('on');
        }
    });
    $('.panel .pmicon').click(function(){

        var is = $(this).next().is(':hidden');
        
        if(is){
            $('.psubnav').stop().slideUp('fast');
            $('.panel h2').removeClass('on');
            $('.panel .pmicon').removeClass('on');
            $(this).next().stop().slideDown('fast');
            $(this).prev().addClass('on');
            $(this).addClass('on');
        }else{
            $(this).next().stop().slideUp('fast');
            $(this).prev().removeClass('on');
            $(this).removeClass('on');
        }
    });
    
    $(window).resize(function(){
        var ww = $(window).width();
        
        close(0);
        
        if(ww >= 1024){
            $('.panel').css('left', -w);
            $('.blackBg').fadeOut(0);
            $('.panel .psubnav').stop().slideUp(0);
            $('html, body').css({
                width: '100%',
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
        }
    });
});