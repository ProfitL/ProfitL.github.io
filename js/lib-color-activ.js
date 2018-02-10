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