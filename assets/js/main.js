$(function(){
    
    //영상크기 변수
    let wHeight = $(window).height();
    let bgmHeight = $('.bgMovie').height();
    
    //브라우저의 높이가 영상의 높이보다 작으면
    if(wHeight<bgmHeight){
        //영상의 높이는 == 윈도우창의 높이
        $('.bgMovie').height(wHeight+'px');
    }
    
    $(window).resize(function(){
        if(wHeight<bgmHeight){
            $('.bgMovie').height($(window).height()+'px');
        }else{
            $('.bgMovie').height('902');
        }
    });
    
    
    //윈도우 가로크기 변수
    let wSize = $(window).width();
    
    if(wSize>=1024){ //pc화면 일때만 동작하라
        
        //패럴랙스 효과
        jQuery('.parallax-layer').parallax({
            mouseport:jQuery("#port"),
        xparallax:0.1,
        yparallax:0,
        xorigin:0.5
        });
}   
});