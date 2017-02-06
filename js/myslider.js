$(document).ready(initAll);

function initAll() {
	var timer1 = 0;
	var j = 1;
	timer1 = setInterval(function(){
		j++;
	if (j > 4) {
		j = 1;
	}
	changeSlide(j);
	},5000);
	pauseSlide();
}

function changeSlide(j) {
	$(".ls-item").html('<img class="lil-slid" src="images/slide'+j+'.png" alt"test">');
	$(".ls-item").fadeIn(300);
	setTimeout(function(){ 
		$(".ls-item").fadeOut(200); }, 4800);
}

function pauseSlide(j) {
	$('.ls-item').on('mouseover', function(){
		clearInterval(timer1);
		return false;
	});
	$('.ls-item').on('mouseout', function(j){
		timer1 = setInterval(function(j){
		j++;
	if (j > 4) {
		j = 1;
	}
	changeSlide(j);
	},5000);
	});
}