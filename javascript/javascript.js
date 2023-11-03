//------- AQUI ESTA LA FUNCIOM DEL BOTON DE IR ARRIBA -----------------------------

$(document).ready(function() {
	
	$('.icon-up').click(function(){
		$('body, html').animate({
			scrollTop:0
			}, 2000 );
		});
    
	$(window).scroll(function() {
    //condicional
		if( $(this).scrollTop() > 0 ){
			$('.icon-up').slideDown('2000');
			} else {
				$('.icon-up').slideUp('2000');
				}
    });
	
});

//-------- AQUI ESTA LA FUNCION DEL MENU HAMBURGUESA --------------------------

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',function(){
	nav.classList.toggle('mostrar');
	})
	
//------------ AQUI ESTA LO QUE HACE DINAMICO AL HEADER -----------------------------

$(document).ready(function() {
    
	$(window).scroll(function() {
    //condicional
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
			} else {
				$('header').removeClass('header2');
				}
    });
	
});