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

	//animating the icon on Into Section
	animateed()

	function animateed() {
		$('.animIcon').animate({ marginTop: '20px'}, 600, function() {
			$('.animIcon').animate({marginTop: '0'}, 600, function() {
				setTimeout(animateed(), 600);
			});
		});
	}

});