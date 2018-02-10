function my() {
  var arrNumMy = [200,300,800,1400,2300,2700,2900,3100,3300,3500,3700,4550,4700,5500]
  var arrClassMy = [".about-h3",".about-p",".services-text-top",".services-content",".showcase-wrap-text",".showcase-item1",".showcase-item2",".showcase-item4",".showcase-item3",".showcase-item6",".showcase-item5",".slider-h2",".slider-autor",".contact-text-top"]
  var scroll = window.pageYOffset;
  for (var i = 0; i < arrClassMy.length; i++) {
    if (scroll > arrNumMy[i]) {
      document.querySelector(arrClassMy[i]).style.transform = "translate(0,-400px)";
    }
  }
}