$(document).ready(function(){
  $('.bxslider').bxSlider();
});
/*===== Varebles =====*/
var bg_elemtnt = document.getElementById('js-bg');
var button_up = document.getElementById('button_up');

/*=====  Events =====*/
button_up.onclick = function() {
	up();
}

/*-------------------------------------*/

document.body.onload = function() {
  changeBackgroundBlock(bg_elemtnt, "background", 2, 4);
  setTimeout(chengeBgBody, 1500);
}


/*-------------------------------------*/
window.onscroll = function() {
  chengeBgBody();
}

/*===== Function for jump to top of the page =====*/

function up() {
  var temp;
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    temp = setTimeout('up()',10);
  } else clearTimeout(t);
  return false;
}

/*====== Function for cenged bacground body =====*/

function chengeBgBody() {
  var scrol_size  = window.pageYOffset || document.documentElement.scrollTop;
  var a = document.documentElement.scrollHeight / 10;
  var body = document.body;

  if(scrol_size > a * 6 ){
    body.style.backgroundImage='url("images/bg_invite.jpg")';
  }else if(scrol_size < a * 6 ){
    body.style.backgroundImage='url("images/background2.jpg")';
  }
}

/*====== Function for random bacground img =====*/

function changeBackgroundBlock(elem, nameImg, numMinImg, numMaxImg) {
  elem.style.backgroundImage = 'url("images/'+nameImg + getRandom(numMinImg, numMaxImg) +'.jpg")';
}

/*====== Function for random numbers =====*/
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min+ 1) ) + min;
}
