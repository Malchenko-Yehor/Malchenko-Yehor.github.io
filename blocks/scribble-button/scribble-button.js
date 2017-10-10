var isTouchDevice = ('ontouchstart' in window  || navigator.maxTouchPoints);
var ScribbleButton = $('.scribble-button');


if(!isTouchDevice){
  ScribbleButton.hover(
    function () {
      $(this).css("background-image", "url('blocks/scribble-button/scribble-button.svg')");
    }, function () {
      $(this).css("background-image", "none");
    }
  );
}
