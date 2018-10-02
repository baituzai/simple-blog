$(function(){
    $('.nav-ul li').click(function(){
        console.log('000')
        $(this).addClass('active')
        $(this).siblings().removeClass('active');
        
    })

    $('.silder-btn').click(function(){
        showSilder();
    });
    $('.mask').click(function(){
        hiddenSilder()
    })
    function showSilder(){
        $('.mask').fadeIn()
        $('.silder').css('right',0)
    }
    function hiddenSilder(){
        $('.mask').fadeOut()
        $('.silder').css('right',-240)
    }
    $('.top').click(function(){
        $('body,html').animate({
            scrollTop:0
        },300)
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.top').css('display','block')
        }else{
            $('.top').css('display','none')
        }
    })
})