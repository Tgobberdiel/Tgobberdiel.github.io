$(".hamburger").on("click", function(){
	$("#menu").toggleClass("active");
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('.slider').each(function() {
  // Set up vars
  var $slider = $(this),
      $sliderList = $slider.find('.slider-list'),
      slides = $sliderList.children().length,
			currentSlide = 0,
	  over = 1;
  
  // Append slider nav
  $slider.append('<button class="slider-nav slider-prev"><div class="triangle-left"></div></button><button class="slider-nav slider-next"><div class="triangle-right"></div></button>');
  var $sliderNav = $slider.find('.slider-nav');

  // Add active class to first slide
  $sliderList.children().first().addClass('active-slide');
  var slideHeight = $sliderList.find('.active-slide').outerHeight();
  
  $slider.css('height', slideHeight);
  
  $sliderNav.on('click', function() {
    $(this).closest('.slider').find('.active-slide').removeClass('active-slide');

    if ($(this).is('.slider-next')) {
			_next();
    }

    if ($(this).is('.slider-prev')) {
			_prev();
    }

    $(this).closest('.slider').find('li:eq('+currentSlide+')').addClass('active-slide');
    slideHeight = $sliderList.find('.active-slide').outerHeight();
    $slider.animate({
      'height': slideHeight
    }, 150);
  });
  
  function _next() {
    currentSlide++;
    if (currentSlide == slides) {
      currentSlide = 0;
    }
    var slideLength = 100 * currentSlide;
    $sliderList.css('transform', 'translateX(-'+slideLength+'%)');
  }
  
  function _prev() {
    currentSlide--;    
    if (currentSlide < 0) {
      currentSlide = slides - 1;
    }
    var slideLength = 100 * currentSlide;
    $sliderList.css('transform', 'translateX(-'+slideLength+'%)');
  }
}); 

$(function() {
	if (window.location.href.indexOf("thanks") > -1){
	$(".contact-containter").hide();
	$(".thanks-form").css("display", "block");
	}
});


var text = 0; 
function testSlide(){    
  if (text == 0) {
  $("#over1").css("display", "block");
  $("#over2").css("display", "none");
  $("#over3").css("display", "none");
    }
  else if (text == 1) {
  $("#over2").css("display", "block");
  $("#over1").css("display", "none");
  $("#over3").css("display", "none");
    }
  else if (text == 2) {
  $("#over1").css("display", "none");
  $("#over2").css("display", "none");
  $("#over3").css("display", "block");
    }
  }  
 
function reset(){ 
  if (text == -1){
    $(text = 2);
  }
  else if (text >= 3){
    $(text = 0);
  }
  }

$(".slider-next").on("click", function(){
  text++;
  reset();
  testSlide();
 });

$(".slider-prev").on("click", function(){
  text--;
  reset();
  testSlide();

 });
	

