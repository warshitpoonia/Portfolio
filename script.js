var menu = document.querySelector("#menu");
var leftside = document.querySelector(".left");
var rightside = document.querySelector(".right");

var flag = 0;
menu.addEventListener("click", function () {
  if (flag === 0) {
    leftside.style.left = 0;
    rightside.style.display = "none";
    flag = 1;
  } else {
    leftside.style.left = "-100%";
    rightside.style.display = "initial";
    flag = 0;
  }
});
