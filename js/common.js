$(document).ready(function(){
	$('.post').hover(function(){
		$('.first').toggleClass('first-pass');
		$('.second').toggleClass('second-active');
	})
});

$('.hamburger').click(function(){
	$('.menu').toggleClass('menu-active');
	$('.menu__link').toggleClass('menu__link-active');
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }

