// window.onscroll = function () {scrollnav()};
// var nav = document.getElementById("top");
// var sticky = nav.offsetTop;
// function scrollnav() {
//   if (window.pageYOffset >= sticky) {
//     top.classList.add("sticky");
//   } else {
//     top.classList.remove("sticky");
//   }
// }

var x = document.getElementById("over");

var y = document.getElementById("imgdis")


// x.onclick = function() {colourF()};
//
//
// function colourF() {
//   var y = document.getElementById("over2").style.backgroundColor;
//   if (y==="blue") {
//     document.getElementById("over2").style.backgroundColor = "red";
//   } else {
//     document.getElementById("over2").style.backgroundColor = "blue";
//   }
// }

document.getElementById("tedtheme").onclick = function() {overShow(0)};
document.getElementById("teddate").onclick = function() {overShow(1)};
document.getElementById("tedcaption").onclick = function() {overShow(2)};


function overShow(a) {
  x.classList.remove("hide");
  x.classList.add("show");
  // if (a==0) {
  //   y.classList.remove("teddate")
  //   y.classList.add("tedtheme")
  // } elseif (a==1) {
  //   y.classList.remove("tedtheme")
  //   y.classList.add("teddate")
  // }
  // y.classList.add("tedtheme")
}

// document.getElementById("tedtheme").onclick = y.classList.add("tedtheme");

document.getElementById("exit").onclick = function() {overHide()};

function overHide() {
  x.classList.remove("show");
  x.classList.add("hide");
}

// colourF();

// y = x.getElementsByTagName("A");
// var i;
// for (i=0; i<y.length; i++) {
//   y[i]
// }
//
//
// document.getElementsByTagName("A").onclick()
