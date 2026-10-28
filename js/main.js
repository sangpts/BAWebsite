;(function () {

	'use strict';

	var mobileBreakpoint = 768;

	// Menu item the user clicked, kept active until they scroll away from where it landed
	var pinnedNav = null;

	var isMobileLayout = function() {
		return window.innerWidth <= mobileBreakpoint;
	};

	// Animations
	var contentWayPoint = function() {
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('animated');
							el.removeClass('item-animate');
						},  k * 120 );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var closeMenu = function() {
		$('body').removeClass('offcanvas');
		$('.js-colorlib-nav-toggle').removeClass('active').attr('aria-expanded', 'false');
	};

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();

			if ($('body').hasClass('offcanvas')) {
				closeMenu();
			} else {
				$(this).addClass('active').attr('aria-expanded', 'true');
				$('body').addClass('offcanvas');
			}
		});

		$('.js-colorlib-nav-close').on('click', closeMenu);

		$(document).on('keydown', function(event){
			if (event.key === 'Escape' && $('body').hasClass('offcanvas')) {
				closeMenu();
			}
		});

		$(window).on('resize', function(){
			if (!isMobileLayout()) {
				closeMenu();
			}
		});

	};

	var clickMenu = function() {

		$('#colorlib-main-menu a, #colorlib-logo a').on('click', function(event){
			var section = $(this).data('nav-section'),
				$target = $('[data-section="' + section + '"]');

			if ( $target.length ) {
				pinnedNav = null;
				$('html, body').stop().animate({
					scrollTop: $target.offset().top - (isMobileLayout() ? 60 : 0)
				}, 500).promise().done(function(){
					pinnedNav = { section: section, top: $(window).scrollTop() };
					navActive(section);
				});
			}

			closeMenu();

			event.preventDefault();
		});

	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#colorlib-main-menu > ul');
		$el.find('li').removeClass('active');
		$el.find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');

	};

	// Active section = the last one whose top has passed the trigger line.
	// Same result whichever way the user scrolls, and the last section wins at the page bottom.
	var navigationSection = function() {

		var $section = $('section[data-section]'),
			ticking = false;

		var update = function() {
			var scrollTop = $(window).scrollTop(),
				line = scrollTop + 150,
				current = $section.first().data('section');

			ticking = false;

			if (pinnedNav) {
				if (Math.abs(scrollTop - pinnedNav.top) < 2) {
					navActive(pinnedNav.section);
					return;
				}
				pinnedNav = null;
			}

			$section.each(function(){
				if ($(this).offset().top <= line) {
					current = $(this).data('section');
				}
			});

			if (scrollTop + $(window).height() >= $(document).height() - 2) {
				current = $section.last().data('section');
			}

			navActive(current);
		};

		$(window).on('scroll resize', function(){
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(update);
			}
		});

		update();

	};

	// "Read more" on case studies and the education accordion
	var toggles = function() {

		$('.js-toggle').on('click', function(){
			var $button = $(this),
				$panel = $('#' + $button.attr('aria-controls')),
				isOpen = $button.attr('aria-expanded') === 'true';

			$button.attr('aria-expanded', isOpen ? 'false' : 'true');

			if (isOpen) {
				$panel.stop(true, true).slideUp(300, function(){
					$panel.prop('hidden', true).css('display', '');
					Waypoint.refreshAll();
				});
			} else {
				$panel.prop('hidden', false).hide().stop(true, true).slideDown(300, function(){
					$panel.css('display', '');
					Waypoint.refreshAll();
				});
			}
		});

	};

	// Document on load.
	$(function(){
		contentWayPoint();
		burgerMenu();
		clickMenu();
		navigationSection();
		toggles();
	});

	// Images and web fonts change section heights after DOM ready
	$(window).on('load', function(){
		Waypoint.refreshAll();
	});


}());
