var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".title").each(function() {
    var elem_pos = $('.title').offset().top;
    $('.title').find(".box_pos span").text(Math.floor(elem_pos));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+100) {
      $('.title').addClass("fadein");
    } else {
      $('.title').removeClass("fadein");
    }
  });

  $(".title-explain").each(function() {
    var elem_pos1 = $('.title-explain').offset().top;
    $('.title-explain').find(".box_pos span").text(Math.floor(elem_pos1));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos1 - window_h+150) {
      $('.title-explain').addClass("move");
    } else {
      $('.title-explain').removeClass("move");
    }
  });






});
