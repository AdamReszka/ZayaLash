$(document).ready(initAll);
	
	var timer1 = 0;
	var moveCounter = 1;
	var clickIndex = 0;

function initAll() {
	$('nav ul li a').click(function(event){
		var sectionID = event.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1000)
	});
	$('#move-arrow').click(function(event){
		$("html body").animate({
			scrollTop: $(".row-gap").offset().top - 240
		}, 1000)
	})
	setHeight();
	resizeMe();
	lightBox();
	// slickRun();
	
};


function setHeight() {
// 	var viewportHeight;
// 	var viewportWidth;
// if (document.compatMode === 'BackCompat') {
//     viewportHeight = document.body.clientHeight;
//     viewportWidth = document.body.clientWidth;
// } else {
//     viewportHeight = document.documentElement.clientHeight;
//     viewportWidth = document.documentElement.clientWidth;
// }
$('#main-view').height($(window).innerHeight());


$(document).ready(function() {
	var NavY = $('.row-three').offset().top;
	var stickyNav = function(){
	var scrollY = $(window).scrollTop();
	if (scrollY >= NavY) { 
		$('.main-navigate').addClass('nav-darken');
		$('.butt').addClass('butt-darken');
		$('.butt-soc').addClass('butt-darken');
	} else {
		$('.main-navigate').removeClass('nav-darken');
		$('.butt').removeClass('butt-darken');
		$('.butt-soc').removeClass('butt-darken');
				}
				};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
	});
}

// $('#myButton').click(function(event) {
//      event.preventDefault();
//    $.scrollTo($('#myDiv'), 1000);
// });

function resizeMe() {
	$(window).resize(function(){
		setHeight();
	});
}

function lightBox() {
	$('.item').on('mouseover', function() {
		$(this).find('.h-c').css('display','flex');
	});
	$('.item').on('mouseleave', function() {
		$(this).find('.h-c').css('display','none');
	});
	$('.item').on('click', function() {
		var myId = (this).id;
		var itemCounter = 0;
		$(this).closest('#homeSection').find('#lightbox').css('display','flex');
		$(this).closest('#homeSection').find('#foto-screen').html('<img class="fotozoom" src="items/foto'+myId+'.png" alt="foto">');
		for (i=1;i<22;i++) {
			if (myId=="item"+i) {
				itemCounter = i;
				break;
			}
		};
		$('#foto-prev').on('click', function() {
			itemCounter--;
			if (itemCounter < 1) {
				itemCounter = 21;
			};
			$(this).closest('#lightbox').find('#foto-screen').html('<img class="fotozoom" src="items/fotoitem'+itemCounter+'.png" alt="foto">');
		});
		$('#foto-next').on('click', function() {
			itemCounter++;
			if (itemCounter > 21) {
				itemCounter = 1;
			};
			$(this).closest('#lightbox').find('#foto-screen').html('<img class="fotozoom" src="items/fotoitem'+itemCounter+'.png" alt="foto">');
		});

	});
	$('#close').on('click', function(event) {
		event.preventDefault();
		
		$('#lightbox').addClass('zoomOut');
		setTimeout(function(){ 
			$('#lightbox').css('display','none');
			$('#lightbox').removeClass('zoomOut'); 
		}, 1000);
	});

	
	// $('#item1').click(function(event) {
	// 	event.preventDefault();
	// 	alert('ok');
	// });

}

// function slickRun() {
// 	console.log("slick is runnin")
// 	$('#mySlider').slick({
// 		dots: true,
// 		arrows: true,
// 		autoplay: true,
// 		infinite: true,
// 		speed: 500,
// 		fade: true,
// 		adaptiveHeight: true,
// 		cssEase: 'linear'
// 	});
// }