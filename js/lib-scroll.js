window.onscroll = function() {
	myFunction();
  my();
	var scroll = document.documentElement.scrollTop;
	console.log(scroll);
  var menu = document.querySelector(".menu")
	if (scroll > 90) {
    document.getElementById("back-on-top").style.display = "block";
    menu.classList.add("blac-menu");
  } else {
    document.getElementById("back-on-top").style.display = "none";
    menu.classList.remove("blac-menu");
  }
}

function topFunction() {
    window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
}