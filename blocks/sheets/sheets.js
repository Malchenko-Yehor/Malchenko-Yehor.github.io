//------Opening And Closing------//

var sheets = $('.sheets');
var close = new TimelineLite();
var isTouchDevice = ('ontouchstart' in window  || navigator.maxTouchPoints);


if (!isTouchDevice) {
  sheets.css('display', 'block');

  $('#sheets-button').click(function () {
    TweenLite.to(sheets, 1, {y: "2.5%", ease: Power3.easeOut});
  });


  $('.sheets__close').click(function () {
    close.to(sheets, 1, {y: "200%", ease: Back.easeIn.config(1.4)});
  });
}

else {
  $('#sheets-button').click(function () {
    sheets.css('transform', 'translateY(0%)');
  });

  $('.sheets__close').click(function () {
    sheets.css('transform', 'translateY(200%)');
  });
}


//------Tilt page------//


var page = {
  number: [],
  index: [],
  counter: 0,

  init: function () {
    this.getNumber();
    this.createInex();
    this.setIndex();
  },

  getNumber: function () {
    $('.sheets__page').each(function () {
      page.number.push($(this).data('page'));
    });
  },

  createInex: function () {
    for (var i = this.number.length; i > 0 ; i--) {
      this.index.push(i);
    }
  },

  setIndex: function () {
    for (var i = 0; i < this.number.length; i++) {
      $('div[data-page ='+ this.number[i] +']').css('zIndex', this.index[i]);
    }
  },

  next: function () {
    if (this.counter < this.number.length-1) {
      $('div[data-page ='+ this.number[this.counter] +']').css('zIndex', -this.number[this.counter]);
      this.counter++;
    }
  },

  backward: function () {
    if (this.counter > 0) {
      $('div[data-page ='+ this.number[this.counter-1] +']').css('zIndex', this.index[this.counter-1]);
      this.counter--;
    }
  }
};

page.init();

$('.next-button, .sheets__forward').click(function () {
  page.next();
});


$('.sheets__backward').click(function () {
  page.backward();
});


$('.menu__item').click(function () {
  var menuPage = $(this).data('page');

  $('.sheets__page').each(function () {
    var check = $(this).data('page');

    if (check < menuPage) {
      $(this).css('zIndex', -check);
    }

    else {
      $(this).css('zIndex', page.index[check-1]);
    }
  });

  page.counter = menuPage - 1;
   TweenLite.to(pages, 1, {rotation:"0", x: 0,  y: 0, transformOrigin:"50% 200%", ease: Power3.easeOut});
});

console.log(page.index);