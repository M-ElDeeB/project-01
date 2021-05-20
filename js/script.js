$(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		pagination: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	//add class active to 
	let select = '.navbar-nav .nav-link';
	$(select).on('hover', function () {
		$(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
	})

	//scroll to section
	$('.navbar-nav .nav-link').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top
		}, 1000)
	})

	//sticky header
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 400) {
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
	})

	//sync navbar links with sections
	$(window).on('scroll', function () {
		$('.block').each(function () {
			if ($(window).scrollTop() > $(this).offset().top) {
				let blocked = $(this).attr('id');
				$(select).removeClass('active');
				$(select + '[data-scroll="' + blocked + '"]').addClass('active')
			}
		})
	})

	$('#know-us').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.welocme-area').innerHeight()
		})
	})
	

	//revel plugin
	var slideUp = {
		distance: '10%',
		origin: 'bottom',
		opacity: 0,
		duration: 1000
	};
	var slideRight = {
		distance: '10%',
		origin: 'right',
		opacity: 0,
		duration: 1000
	};
	var slideLeft = {
		distance: '10%',
		origin: 'left',
		opacity: 0,
		duration: 1000
	};

	//welcome page 
	ScrollReveal().reveal('.headline', slideUp);
	//About section
	ScrollReveal().reveal('.from-left', slideLeft);
	ScrollReveal().reveal('.from-bottom', slideUp);
	ScrollReveal().reveal('.from-right', slideRight);

});

$(window).on('load', function () {
	$('.preload-page').fadeOut();
	$('body').css('overflow-y', 'scroll')
})