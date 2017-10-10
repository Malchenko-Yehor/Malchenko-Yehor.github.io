var pages = $('.sheets__holder');

  $('.menu-open').click(function () {
    TweenLite.to(pages, 1, {rotation:"8deg", x:50,  y: -100, transformOrigin:"50% 200%", ease: Power3.easeOut});
  });

  $('.menu-close').click(function () {
    TweenLite.to(pages, 1, {rotation:"0", x: 0,  y: 0, transformOrigin:"50% 200%", ease: Power3.easeOut});
  });
