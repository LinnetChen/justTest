//footer隱藏按鈕

let c = 0;
$('.footer-btnbox').click(function(){
    //上
    if(c == 0){
        c += 1;
        $('footer').animate({
            bottom:'0px'
        },500);
        $('.footer-btnbox').css({
            "background-color":"rgb(47, 98, 134)"
        });
        $('.footer-btn p').delay(150).fadeOut(500);
        $('.footer-btnball').animate({
            marginLeft:'29px',
            rotate:'90deg'
        },500);
    }
    //下
    else{
        c -= 1;
        $('footer').animate({
            bottom:'-500px'
        },800);
        $('.footer-btnbox').css({
            "background-color":"rgba(194, 194, 194, 0.5)"
        });
        $('.footer-btn p').fadeIn(500);
        $('.footer-btnball').animate({
            marginLeft:'3px',
            rotate:'0deg'
        },500);
    }
});