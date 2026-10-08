$(document).ready(function () {
  //------------------slider bg------------------//
  let current = 0;
  setInterval(function () {
    if (current > 2) {
      current = 0;
    }
    $('.slide-bg > div').removeClass('active');
    $('.slide-bg > div').eq(current).addClass('active');
    current++;
  }, 3500);

  //------------------top btn------------------//
  //top btn scroll show / hide
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.top_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
    }
  });
  //top btn click scroll
  $('.top_btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //------------------resizing gnb menu------------------//
  $('.trigger').click(function () {
    $('.gnb, .overlay').toggleClass('active')
    $(this).toggleClass('active')
  });
  $('.overlay, .gnb').click(function () {
    $('.gnb, .trigger, .overlay').removeClass('active')
  });

  //------------------resizing slide------------------//
  $('.resizing-slide').slick({
    responsive: [{
      breakpoint: 899,
      settings: {
        autoplay: true,
        dots: true,
        arrows: false
      }
    }]
  });
});
