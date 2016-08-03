
/*nav bar show and hide*/


document.addEventListener("DOMContentLoaded", ready);

var buttonSideBar = document.getElementById("btn-nav-drop");
var triangle = document.getElementById('bottom_triangle');

function  ready(){
	container.style.width = document.documentElement.clientWidth + "px";
	sideBar.style.left = document.documentElement.clientWidth + "px";
	triangle.style.top = document.documentElement.clientHeight + "px";
	body.style.backgroundImage='url(images/bg_invite.jpg)';
}

var container = document.getElementById('js-container');
var sideBar = document.getElementById('js-nav-bar');
var sidebarShowOrHide = false;


window.onresize = function(){
	container.style.width = document.documentElement.clientWidth + "px";
	sideBar.style.left = document.documentElement.clientWidth + "px";
	triangle.style.top = document.documentElement.clientHeight + "px";
}


buttonSideBar.onclick = function(){
	if (sidebarShowOrHide) {
		container.style.marginLeft = 0 +"px";
		sideBar.style.marginLeft = 0 +"px";
		
		sidebarShowOrHide = false;
	} else {
		sideBar.style.marginLeft = "-" + sideBar.offsetWidth +"px";
		container.style.marginLeft = "-" + sideBar.offsetWidth +"px";
		
		sidebarShowOrHide = true;
	}
	
}
// ============ Карусель ================
$(document).ready(function(){
  $('.bxslider').bxSlider();
});
//=======================================

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

// ============ Автопрокрутка вверх ====
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