$(document).ready(function(){
  $('.bxslider').bxSlider();
});


var button_up = document.getElementById('button_up');
button_up.onclick = function() {
	up();
}
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',10);
  } else clearTimeout(t);
  return false;
}

window.onload = function() {
  window.onscroll = function() {
    var scrol_size  = window.pageYOffset || document.documentElement.scrollTop;
    var a = document.documentElement.scrollHeight / 10;
    var body = document.body;
    if(scrol_size > a * 6){
      body.style.backgroundImage='url(images/bg_invite.jpg)';
    }else if(scrol_size < a * 6){
      body.style.backgroundImage='url(images/background2.jpg)';
    }

  }
}