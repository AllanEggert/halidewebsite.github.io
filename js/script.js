var lastScroll = 0;
var bg_offset = 0;
$(window).scroll(function() {
  var st = $(this).scrollTop();
  if(st > lastScroll) {
    // User Scrolled Down
    // most negative offset = -470px
    bg_offset -= 0.75;
    if(bg_offset < -470) {
      bg_offset = -470;
    }
    else if(bg_offset > 0) {
      bg_offset = 0;
    }
    $(".img-still").css('background-position-y', bg_offset);
  }
  else {
    // User Scrolled Up
    bg_offset += 0.75;
    if(bg_offset < -470) {
      bg_offset = -470;
    }
    else if(bg_offset > 0) {
      bg_offset = 0;
    }
    $(".img-still").css('background-position-y', bg_offset);
  }
  lastScroll = st;
});
