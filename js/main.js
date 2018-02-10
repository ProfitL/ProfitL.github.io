/*progressbar*/

function myFunction() {
	var scroll = window.pageYOffset;
	var height = document.documentElement.scrollHeight - window.innerHeight;
	var scrolled = (scroll / height) * 100;
  var textpro = document.querySelector(".progressbar").style.width = scrolled + "%";
}

/*transform-top*/

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

/*scroll*/
/*back-on-top*/
/*blac-menu*/

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

/*dateDropper*/

$('.contact-input-date').dateDropper();

/*preloader*/

document.body.onload = function() {
  setTimeout(function(){
    var preloader = document.getElementById('preloaderr');
    preloader.classList.add('done'); 
  },2000);
  setTimeout(function(){
    document.querySelector('.str-home-text-centr').style.transform = "rotate(0deg)";
  },2100);
  setTimeout(function(){
    document.querySelector('.str-home-text-bottom').style.transform = "rotate(0deg)";
  },2200);
}

/*nav-menu*/
/*scroll-down*/

$('#menu').on('click',function(){
  $('#nav-menu').css('transform' , 'translate(-240px,0)');
  $('.overlay-exet-menu').css('display' , 'block');
})

var arrClassNav = [".nav-menu-exet",".overlay-exet-menu"];

for (var i = 0; i < arrClassNav.length; i++) {
  $(arrClassNav[i]).on('click',function(){
    $('#nav-menu').css('transform' , 'translate(240px,0)');
    $('.overlay-exet-menu').css('display' , 'none');
  })
}

function scrollDown() {
    window.scroll({
    top:920,
    left:0,
    behavior:'smooth'
  });
}

function navHome() {
    window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
}

function navAbout() {
    window.scroll({
    top:920,
    left:0,
    behavior:'smooth'
  });
}

function navServices() {
    window.scroll({
    top:1520,
    left:0,
    behavior:'smooth'
  });
}

function navWorks() {
    window.scroll({
    top:2980,
    left:0,
    behavior:'smooth'
  });
}

function navContact() {
    window.scroll({
    top:6040,
    left:0,
    behavior:'smooth'
  });
}

/*color-active*/

var colorImg = document.querySelector(".color-activ-img");
var colorLeft = document.querySelector(".color-activ-left");
var colorActiv = document.querySelector(".color-activ")
var i=0;

$('.overlay-exet-color').on('click',function(){
  $('.color-activ-left').css('transform' , 'translate(-200px,0)');
  $('.color-activ-img').css('transform' , 'translate(-200px,0)');
  $('.overlay-exet-color').css('display' , 'none');
  i++;
})

$('.color-activ-img').on('click',function(){
  i++;
  if (i%2==1) {
    $('.color-activ-left').css('transform' , 'translate(0,0)');
    $(this).css('transform' , 'translate(0,0)');
    $('.overlay-exet-color').css('display' , 'block');
  } else {
    $('.color-activ-left').css('transform' , 'translate(-200px,0)');
    $(this).css('transform' , 'translate(-200px,0)');
  }
  $('.yellowgreen-bac').on('click',function(){
    $('.home-h1').css('color','yellowgreen');
    $('.color-activ-left-ul').css('background-color','yellowgreen');
    $('.progressbar').css('background-color','yellowgreen');
    $('.footer-button').css('background-color','yellowgreen');
    $('.contact-button').css('background-color','yellowgreen');
    $('.services-ico').css('color','yellowgreen');
  })
  $('.aqua-bac').on('click',function(){
    $('.home-h1').css('color','aqua');
    $('.color-activ-left-ul').css('background-color','aqua');
    $('.progressbar').css('background-color','aqua');
    $('.footer-button').css('background-color','aqua');
    $('.contact-button').css('background-color','aqua');
    $('.services-ico').css('color','aqua');
  })
  $('.hotpink-bac').on('click',function(){
    $('.home-h1').css('color','hotpink');
    $('.color-activ-left-ul').css('background-color','hotpink');
    $('.progressbar').css('background-color','hotpink');
    $('.footer-button').css('background-color','hotpink');
    $('.contact-button').css('background-color','hotpink');
    $('.services-ico').css('color','hotpink');
  })
  $('.cadetblue-bac').on('click',function(){
    $('.home-h1').css('color','cadetblue');
    $('.color-activ-left-ul').css('background-color','cadetblue');
    $('.progressbar').css('background-color','cadetblue');
    $('.footer-button').css('background-color','cadetblue');
    $('.contact-button').css('background-color','cadetblue');
    $('.services-ico').css('color','cadetblue');
  })
  $('.crimson-bac').on('click',function(){
    $('.home-h1').css('color','crimson');
    $('.color-activ-left-ul').css('background-color','crimson');
    $('.progressbar').css('background-color','crimson');
    $('.footer-button').css('background-color','crimson');
    $('.contact-button').css('background-color','crimson');
    $('.services-ico').css('color','crimson');
  })
  $('.darkblue-bac').on('click',function(){
    $('.home-h1').css('color','darkblue');
    $('.color-activ-left-ul').css('background-color','darkblue');
    $('.progressbar').css('background-color','darkblue');
    $('.footer-button').css('background-color','darkblue');
    $('.contact-button').css('background-color','darkblue');
    $('.services-ico').css('color','darkblue');
  })
  $('.darkslateblue-bac').on('click',function(){
    $('.home-h1').css('color','darkslateblue');
    $('.color-activ-left-ul').css('background-color','darkslateblue');
    $('.progressbar').css('background-color','darkslateblue');
    $('.footer-button').css('background-color','darkslateblue');
    $('.contact-button').css('background-color','darkslateblue');
    $('.services-ico').css('color','darkslateblue');
  })
  $('.yellow-bac').on('click',function(){
    $('.home-h1').css('color','#f9a828');
    $('.color-activ-left-ul').css('background-color','#f9a828');
    $('.progressbar').css('background-color','#f9a828');
    $('.footer-button').css('background-color','#f9a828');
    $('.contact-button').css('background-color','#f9a828');
    $('.services-ico').css('color','#f9a828');
  })
  $('.salmon-bac').on('click',function(){
    $('.home-h1').css('color','salmon');
    $('.color-activ-left-ul').css('background-color','salmon');
    $('.progressbar').css('background-color','salmon');
    $('.footer-button').css('background-color','salmon');
    $('.contact-button').css('background-color','salmon');
    $('.services-ico').css('color','salmon');
  })
})

/*slider*/

slidetime();
var SliderLeft = 0;
function slidetime() {
  var SlideTimer = setInterval(SliderLeft, 6000);
}
function SliderLeft() {
  var mainSlider = document.querySelector('.main-slider');
  SliderLeft = SliderLeft - 1100;
  if (SliderLeft < -1100) {
    SliderLeft = 0;
  }
  mainSlider.style.left = SliderLeft +'px';
  slidetime();
}

/*gallery*/

$(".click").click(function(){
  var imgClick = $(this);
  var src_imgClick = imgClick.attr('src');

  $("body").append("<div class='img-big'>"+
           "<div class='img-big-bg'></div>"+
           "<img src='"+src_imgClick+"' class='img-big-img' />"+ 
           "</div>"); 
  $(".img-big").fadeIn(500);
  $(".img-big-bg").click(function(){ 
    $(".img-big").fadeOut(500);
    setTimeout(function() {
      $(".img-big").remove();
    }, 500);
  });
});

/*egg.js*/

var egg = new Egg();
egg.addCode("i,n,f,i,n,i,t,y", function() {
  blink()
})
.addHook(function(){
  console.log("Hook called for: " + this.activeEgg.keys);
}).listen();

/*button-color*/ 

function blink(){
  $(".btn-2a").removeClass('btn-2a btn-2')
  var arrClassButtonColor = [".button",".contact-button",".footer-button",".btn-2a",".btn-2"] ;
  for (var i = 0; i < arrClassButtonColor.length; i++) {
    $(arrClassButtonColor[i])
    .animate({backgroundColor: '#FF0000'}, 150)
    .animate({backgroundColor: '#FF9500'}, 150)
    .animate({backgroundColor: '#FFD200'}, 150)
    .animate({backgroundColor: '#74E600'}, 150)
    .animate({backgroundColor: '#1049A9'}, 150)
    .animate({backgroundColor: '#4212AF'}, 150)
    .animate({backgroundColor: '#A600A6'}, 150,
    function(){
      blink()
    });
  }
}

/*ContactError*/

function contactErrorMail(){
  document.querySelector('.er-mail').style.background = "#DA4453";
  document.querySelector('.er-mail').style.opacity = "1";
  document.querySelector('.error').style.transform = "translate(-240px,0)";
  document.querySelector('.error').innerHTML = 'Error';
  setTimeout(function(){
    document.querySelector('.error').style.transform = "translate(240px,0)";
    document.querySelector('.er-mail').style.background = "";
  },3000);
}

function contactErrorName(){
  document.querySelector('.er-name').style.background = "#DA4453";
  document.querySelector('.er-name').style.opacity = "1";
  document.querySelector('.error').style.transform = "translate(-240px,0)";
  document.querySelector('.error').innerHTML = 'Error';
  setTimeout(function(){
    document.querySelector('.error').style.transform = "translate(240px,0)";
    document.querySelector('.er-name').style.background = "";
  },3000);
}

function contactErrorSubject(){
  document.querySelector('.er-subject').style.background = "#DA4453";
  document.querySelector('.er-subject').style.opacity = "1";
  document.querySelector('.error').style.transform = "translate(-240px,0)";
  document.querySelector('.error').innerHTML = 'Error';
  setTimeout(function(){
    document.querySelector('.error').style.transform = "translate(240px,0)";
    document.querySelector('.er-subject').style.background = "";
  },3000);
}

function contactErrorMessage(){
  document.querySelector('.er-textarea').style.background = "#DA4453";
  document.querySelector('.er-textarea').style.opacity = "1";
  document.querySelector('.error').style.transform = "translate(-240px,0)";
  document.querySelector('.error').innerHTML = 'Error';
  setTimeout(function(){
    document.querySelector('.error').style.transform = "translate(240px,0)";
    document.querySelector('.er-textarea').style.background = "";
  },3000);
}

function contactWell(){
  document.querySelector('.well').style.transform = "translate(-240px,0)";
  document.querySelector('.well').innerHTML = 'The form is submitted';
  setTimeout(function(){
    document.querySelector('.well').style.transform = "translate(240px,0)";
  },3200);
}

/*check form*/

function checkForm(){
  var name = document.getElementById('name');
  var rezulName = name.value;
  console.log(rezulName);
  var regName = rezulName.search(/^[_a-zA-Zа-яА-Я ]+$/);
  if (regName == -1) {
    document.querySelector('.contact-input-name').style.border = '1px soled silver';
    contactErrorName()
  }

  var email = document.getElementById('email');
  var rezulEmail = email.value;
  console.log(rezulEmail);
  var regEmail = rezulEmail.search(/^([^<>{}(\)\[\]\\.,-;:\s@\/"'?!@#$%^&*]+)@((([a-z][^<>{}(\)\[\]\\.,;:\s@\/"'-?_!@#$%^&*]+)+\.[a-z]{2,}))$/);
  if (regEmail == -1) {
    contactErrorMail()
  }

  var subject = document.getElementById('subject');
  var rezulSubject = subject.value;
  console.log(rezulSubject);
  var regSubject = rezulSubject.search(/^[_a-zA-Z0-9а-яА-Я ]+$/);
  if (regSubject == -1) {
    contactErrorSubject()
  }

  var message = document.getElementById('zaz');
  var rezulMessage = message.value;
  console.log(rezulMessage);
  var regMessage = rezulMessage.search(/^[_a-zA-Zа-яА-Я ]+$/);
  if (regMessage == -1) {
    contactErrorMessage()
  }


  if (regEmail == 0 && regName == 0 && regSubject == 0 && regMessage == 0 )  {
    contactWell()
  }
}

function clickForm(){
  checkForm()
}

/*FooterError*/

function footerErrorMail(){
  document.querySelector('.er-footer-mail').style.background = "#DA4453";
  document.querySelector('.er-footer-mail').style.opacity = "1";
  document.querySelector('.error').style.transform = "translate(-240px,0)";
  document.querySelector('.error').innerHTML = 'Error';
  setTimeout(function(){
    document.querySelector('.error').style.transform = "translate(240px,0)";
    document.querySelector('.er-footer-mail').style.background = "";
  },3000);
}

function checkFooter(){
  var emailFooter = document.getElementById('test');
  var rezulEmailFooter = emailFooter.value;
  console.log(rezulEmailFooter);
  var regEmailFooter = rezulEmailFooter.search(/^([^<>{}(\)\[\]\\.,-;:\s@\/"'?!@#$%^&*]+)@((([a-z][^<>{}(\)\[\]\\.,;:\s@\/"'-?_!@#$%^&*]+)+\.[a-z]{2,}))$/);
  if (regEmailFooter == -1) {
    footerErrorMail()
  }
  if (regEmailFooter == 0) {
    contactWell()
  }
}

function clickFooter(){
  checkFooter()
}