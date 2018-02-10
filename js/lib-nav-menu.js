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