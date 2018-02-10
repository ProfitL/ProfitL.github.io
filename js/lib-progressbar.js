function myFunction() {
	var scroll = window.pageYOffset;
	var height = document.documentElement.scrollHeight - window.innerHeight;
	var scrolled = (scroll / height) * 100;
  	var textpro = document.querySelector(".progressbar").style.width = scrolled + "%";
}