(function($) {
	$(document).ready(function() {
		"use strict";
		// HERO FADE
		var div = $('.header');
			$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			div.css({ 'opacity' : (1 - st/500) });
		});

		var divs = $('.page-header');
			$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			divs.css({ 'opacity' : (1 - st/400) });
		});
		
		
		// PARALLAX LAYERS
		$('#parallax').parallax({
			invertX: true,
			invertY: true,
			scalarX: 10,
			 frictionY: .1
		});


		
		// TYPEWRITER
		$("#typewriter").typewriter({
			prefix : "",
			text : ["Please wait", "Still loading", "Almost done"],
			typeDelay : 100,
			waitingTime : 1500,
			blinkSpeed : 800
		});
		
		// NAV LINK HOVER AUDIO
		$(".navigation-menu a")
			.each(function(i) {
			if (i != 0) {
			  $("#hover-audio")
				.clone()
				.attr("id", "hover-audio" + i)
				.appendTo($(this).parent());
			}
			$(this).data("beeper", i);
		}).mouseenter(function() {
			$("#hover-audio" + $(this).data("beeper"))[0].play();
			});
			$("#hover-audio").attr("id", "hover-audio0");

			// SANDWICH MENU AUDIO
			document.getElementById("sandwich-btn").addEventListener('click', function(e) {
			document.getElementById("link").play();
	  	});
		

		// PAGE TRANSITION
		$('.navigation-menu ul li a').on('click', function(e) {
		$('.transition-overlay').toggleClass("open");
		});
		$('.navigation-menu ul li a').on('click', function(e) {
			e.preventDefault();                  
			var goTo = this.getAttribute("href"); 
			setTimeout(function(){
				window.location = goTo;
			},1000);       
		});	

		// HIDE NAVBAR
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.navbar').addClass('hide');
				$('.navbar').css('transition-delay', '0s');
			} else {
				$('.navbar').removeClass('hide');
			}
		});

		// SANDWICH BUTTON
		$('.sandwich-btn').on('click', function(e) {
			if ($(".navigation-menu").hasClass("open")) {
				$("body").removeClass('overflow');
				$(".navigation-menu").removeClass('open');
				$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
				$('.navigation-menu .green-layer').css('transition-delay', '0.8s');
			} else
			{
				$(".navigation-menu").addClass('open');
				$("body").addClass('overflow');
				$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
				$('.navigation-menu .green-layer').css('transition-delay', '0s');
			}
			$(this).toggleClass("open");
		});
		
		// DOTS FILTER
		$('.dots-menu').on('click', function(e) {
    		$(this).toggleClass("active");
    		$('.works-filter').toggleClass("active");
		});
		
		// SMOOTH SCROLL
		$('.case-details .case-navbar ul li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
			
	});
	// END JQUERY		

	
	
	// PRELOADER
	var width = 100,
		perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
		time = parseInt((EstimatedTime/1000)%60, 10)*100;

	$(".loadbar").animate({
	  	width: width + "%"
		}, time);

	function animateValue(id, start, end, duration) {

	var range = end - start,
	  	current = start,
	  	increment = end > start? 1 : -1,
	  	stepTime = Math.abs(Math.floor(duration / range)),
	  	obj = $(id);

	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
	}

	setTimeout(function(){
		$("body").addClass("page-loaded");
	}, time);

	// DATA BACKGROUND IMAGE
	var pageSection = $(".bg-image");
	pageSection.each(function(indx){
		if ($(this).attr("data-background")){
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});

	// WOW ANIMATION 
	var wow = new WOW(
	{
		animateClass: 'animated',
		offset:       50
	}
	);
	wow.init();

	// MASONRY
	var $container = $('.works ul').imagesLoaded( function() {
		$container.isotope({
		  itemSelector: '.works ul li',
		  layoutMode: 'masonry'
		});
	});

	// ISOTOPE FILTER
	var $container = $('.works ul');
	$container.isotope({
	filter: '*',
	animationOptions: {
	duration: 750,
	easing: 'linear',
	queue: false
	}
	});

	$('.works-filter li a').on('click', function(e) {
	$('.works-filter li a.current').removeClass('current');
	$(this).addClass('current');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false
		}
	});
	return false;
	}); 

	// COUNTER 
	if (!document.getElementById("counter")) {
	} 
	else {

	var lastWasLower = false;
		$(document).scroll(function(){

		var p = $( "#counter" );
		var position = p.position();
		var position2 = position.top;

		if ($(document).scrollTop() > position2-300){
		if (!lastWasLower)
			$('#1').html("21");
			$('#2').html("37");
			$('#3').html("78");

		lastWasLower = true;
			} else {
		lastWasLower = false;
		}
		});		
	}

	// SLIDER
	var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        paginationClickable: true,
        parallax: true,
        speed: 600,
        loop: true,
		initialSlide: 0,
		// centeredSlides: true,
		spaceBetween: 10,
		// slidesPerView: 3,
    });
	

	// MAGNET EFFECT 
	document.addEventListener("mousemove", function(e){
	  magnetize('.circle', e);
	});

	function magnetize(el, e){
	  var mX = e.pageX,
		  mY = e.pageY;
	  var items = document.querySelectorAll(el);

	  [].forEach.call(items, function(item) {
		var customDist = item.getAttribute('dist') * 20 || 120;
		var centerX = item.offsetLeft + (item.clientWidth/2);
		var centerY = item.offsetTop + (item.clientHeight/2);

		var deltaX = Math.floor((centerX - mX)) * -0.45;
		var deltaY = Math.floor((centerY - mY)) * -0.45;

		var distance = calculateDistance(item, mX, mY);

		if(distance < customDist){
		  TweenMax.to(item, 0.3, {y: deltaY, x: deltaX, scale:1.1});
		  item.classList.add('magnet');
		}
		else {
		  TweenMax.to(item, 0.45, {y: 0, x: 0, scale:1});
		  item.classList.remove('magnet');
		}     
	   });
	}

	function calculateDistance(elem, mouseX, mouseY) {
	  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.clientHeight/2)), 2)));
	}
	
	
	// PARTICLES JS
	if( document.getElementById("particles-js") ) {
        particlesJS('particles-js',

            {
                "particles": {
                    "number": {
                        "value": 161,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#2f2f2f"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#c3c3c3",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }
        );
    }
})(jQuery);