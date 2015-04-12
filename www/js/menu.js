$(document).ready(main);

var contador = 1;

function main (){
	
	$('.menu_bar').click(function(){	
		if (contador == 1){
			$('.navlateral ul').animate({
				left: '0'
			});
			$('#logo2').animate({
				left: '2%'
			});
			$('.nombreempresa2').animate({
				left: '7%'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.navlateral ul , #logo2 , .nombreempresa2').animate({
				left: '-100%'
			});
		};
	});
	$('.pisomenu').click(function(){
				contador = 1;
			$('.navlateral ul , #logo2 , .nombreempresa2').animate({
				left: '-100%'
			});		
	});
};