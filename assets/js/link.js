$(function(){
    
//내비게이션 클릭시 해당하는 문서 연계하여 불러오기
$('.gnb_main>ul>li:eq(0)>a').click(function(){
    pageLink('./sub/profile.html');
});

$('.gnb_main>ul>li:eq(1)>a').click(function(){
    pageLink('./sub/news.html');
});

$('.gnb_main>ul>li:eq(2)>a').click(function(){
    pageLink('./sub/gallery.html');
});

$('.gnb_main>ul>li:eq(3)>a').click(function(){
    pageLink('./sub/pictorial.html');
});

$('.gnb_main>ul>li:eq(4)>a').click(function(){
    pageLink('./sub/work.html');
});

$('.gnb_main>ul>li:eq(5)>a').click(function(){
    pageLink('./sub/schedule.html');
});

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

    };

//메인메뉴에 각 메뉴 클릭시 해당 페이지 나오도록 하기
$('.toggleMenu li:eq(0) a').click(function(){
   barAniClose();
    pageLink('./sub/profile.html');
});

$('.toggleMenu li:eq(1) a').click(function(){
   barAniClose();
    pageLink('./sub/news.html');
});

$('.toggleMenu li:eq(2) a').click(function(){
   barAniClose();
    pageLink('./sub/gallery.html');
});

$('.toggleMenu li:eq(3) a').click(function(){
   barAniClose();
    pageLink('./sub/pictorial.html');
});

$('.toggleMenu li:eq(4) a').click(function(){
   barAniClose();
    pageLink('./sub/work.html');
});

$('.toggleMenu li:eq(5) a').click(function(){
   barAniClose();
    pageLink('./sub/schedule.html');
});


function pageLink(aLink){
    $('section').load(aLink);
}
    
});