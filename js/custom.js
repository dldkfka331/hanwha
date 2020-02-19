(function($){

   
    //alert($("#header").offset().top+30) 30
//헤더부분
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > 30){
       $("#header").addClass("on");
       $("#dot").addClass("on");
    }else{
        $("#header").removeClass("on");
        $("#dot").removeClass("on");
    }
    if(wScroll <= $(window).height()/2 ){
        $(".h_contents .h_text span").css("display","block");
    }else{
        $(".h_contents .h_text span").css("display","none");
    }
    if(wScroll >= $("#contents > section").eq(0).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(0).addClass("active");
    }
    if(wScroll >= $("#contents > section").eq(1).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(1).addClass("active");
        $(".h_contents .h_text span").css("display","none");
        $(".ht_img .ht_text").addClass("show")
    }
    if(wScroll >= $("#contents > section").eq(2).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(2).addClass("active");
        $(".ht_img .ht_toy span").css("transform" ,"scale(1)");
        $(".ht_img .ht_text").addClass("show");
    }
    if(wScroll >= $("#contents > section").eq(3).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(3).addClass("active");
    }
    if(wScroll >= $("#contents > section").eq(4).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(4).addClass("active");
    }
    if(wScroll >= $("#contents > section").eq(5).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(5).addClass("active");
    }
    if(wScroll >= $("#contents > section").eq(6).offset().top ){
        $("#dot ul li").removeClass("active");
        $("#dot ul li").eq(6).addClass("active");
    }
});

//햄버거메뉴
$(".ham").click(function(){
    $(this).toggleClass("active")
});

//네비
$("#dot ul li").click(function(){
    let target = $(this);
    let index = target.index();
    let sec = $("#contents > section").eq(index);
    let off = sec.offset().top;
    $("#dot ul li").removeClass("active");
    target.addClass("active");
    $("html, body").animate({scrollTop : off },600);
});

$("#dot ul li a[href^='#']").on("click",function(){
    let target = $($(this).attr("href"));
    if(target.length){
      $("html, body").animate({scrollTop: target.offset().top},600,"easeInOutExpo")
    }
  });
  $(window).scroll(function(){
    let wScroll = $(window).scrollTop();
  });


  $(".footer .foot_family p").mouseover(function(){
    $(".family_list").stop().slideDown();
  });
  $(".footer .foot_family p").mouseout(function(){
    $(".family_list").stop().slideUp();
  });


})(jQuery);
