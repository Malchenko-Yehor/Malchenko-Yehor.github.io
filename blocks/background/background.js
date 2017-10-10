//------Show up------//
var ground = $('.background__ground');
var mountains = $('.background__mountains');
var clouds = $('.background__clouds');
TweenMax.staggerTo([ground, mountains, clouds], 1, {opacity: 1}, 0.35);


//------Parallax------//
var scene = document.getElementById('background');
var parallaxInstance = new Parallax(scene);



//------Animations------//

var isTouchDevice = ('ontouchstart' in window  || navigator.maxTouchPoints);

// Clouds

if(!isTouchDevice){
  var cloud1 = $('.background__cloud-1');
  var cloud2 = $('.background__cloud-2');
  var cloud3 = $('.background__cloud-3');

  var animCloud1 = new TimelineMax({repeat: -1});
  var animCloud2 = new TimelineMax({repeat: -1});
  var animCloud3 = new TimelineMax({repeat: -1});


  animCloud1.to(cloud1, 5 , {left:"-65%", ease:Linear.easeNone})
    .to(cloud1, 0 , {left: "70%", ease:Linear.easeNone})
    .to(cloud1, 5 , {left: "0", ease:Linear.easeNone});

  animCloud2.to(cloud2, 9 , {left:"-90%", ease:Linear.easeNone})
    .to(cloud2, 0 , {left: "50%", ease:Linear.easeNone})
    .to(cloud2, 5 , {left: "0", ease:Linear.easeNone});

  animCloud3.to(cloud3, 12 , {left:"-75%", ease:Linear.easeNone})
    .to(cloud3, 0 , {left: "50%", ease:Linear.easeNone})
    .to(cloud3, 8 , {left: "0", ease:Linear.easeNone});
}