$(document).ready(function() {

	//Nav Bar
	var introHeight = $('.intro').height()
	
	$(window).scroll(function() {
		
		if(($(this).scrollTop() > introHeight) && ($(this).width() > 930 )) {
			$('.navbar').addClass('fixed-nav')
			$('.navbar img').attr('src', 'img/logo2.png')

		} 
		else {
			$('.navbar').removeClass('fixed-nav')
			$('.navbar img').attr('src', 'img/logo.png')

		}
	})

});