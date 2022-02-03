$(document).ready(function () {

    let slcon = $('.snsBtn>ul>li>a');

    slcon.hover(function () {

        $(this).toggleClass('hover');
        $(this).find('.bg').toggleClass('hover');
        $(this).find('i').toggleClass('hover');
    });

    //햄버거 메뉴에 마우스 오버시
    $('.toggle').hover(function () {
        $(this).find('.bar').addClass('hover');
    }, function () {
        $(this).find('.bar').removeClass('hover');
    });
    

    //햄버거 메뉴를 클릭하면 X자모양 나오게하고
    //마지막 바를 애니메이션 한다.
    function barAniOpen() {
        $('.toggle>.bar').removeClass('hover');
        $('.toggle').children('.bar:last-child').animate({
            'width': $(window).width() - 80 + 'px'
        }, 500);

        $('.toggle').children('.bar:last-child').animate({
            'top': '1080px'
        }, 1000);

        $('.toggle').children('.bar:lt(2)').css('width', '40px'); //첫번째,두번째 바 엑스자로 만들기
        $('.toggle').children('.bar:eq(0)').addClass('closeToggle_L');
        $('.toggle').children('.bar:eq(1)').addClass('closeToggle_R');
        
        //전체메뉴 내려오게하기
        $('.toggleMenu').delay(1500).animate({'top':'0px'});
    }

    function barAniClose() {
        $('.toggle > .bar').removeClass('hover');
        $('.toggle > .bar:eq(1)').css({'width':'32px'});
        $('.toggle').children('.bar:last-child').css({
            'width': '0px',
            'top': '64px'
        }).animate({
            'width': '20px'
        });

        $('.toggle').children('.bar:eq(0)').removeClass('closeToggle_L');
        $('.toggle').children('.bar:eq(1)').removeClass('closeToggle_R');

       //전체메뉴 올라가게하기
        $('.toggleMenu').animate({'top':'-100%'});

    }
    //햄버거 메뉴를 클릭시 함수 호출
    $('.toggle').click(function () {
        //만약, 바에 클래스명의 존재여부를 따져서 함수를 호출하기
        if ($(this).children('.bar:eq(0)').hasClass('closeToggle_L') == false) {
            barAniOpen();
        } else {
            barAniClose();
        }
    });

   //토글메뉴 클릭시 나오는 내비게이션 마우스 오버시 글자크기, 바 동작하기
    $('.toggleMenu>nav>ul>li').hover(function(){
        $(this).children('a').addClass('hover');
        $(this).children('.bar').addClass('hover');
    },function(){
        
        $(this).children('a').removeClass('hover');
        $(this).children('.bar').removeClass('hover');
        
    });

    
    
    
    
    
    
    
    
    
    
    
});
