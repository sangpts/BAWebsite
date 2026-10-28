// =======================================================
// Projects
// Add a project by adding an object here. No HTML changes needed.
//   images:  list of image paths, e.g. ['images/minierp-1.png', 'images/minierp-2.png'].
//            Empty list shows a "Screenshot coming soon" box.
//   liveUrl / codeUrl: leave '' to hide that button.
// =======================================================
var projects = [
	{
		status: 'Demo',
		title: 'Operations Management System',
		description: 'Web app for a manufacturing and installation business covering projects, procurement, warehouse, production and finance, with role-based permissions. Demo version with sample data.',
		tech: ['.NET', 'Angular', 'PostgreSQL', 'AI-assisted development'],
		images: [],
		liveUrl: '',
		codeUrl: 'https://github.com/stevenphung60-rgb/business-minierp-demo'
	},
	{
		status: 'Demo',
		title: 'Company Website with Admin Panel',
		description: 'Multilingual company website where staff update products, services and projects through an admin panel. Demo version with a fictional company and sample data.',
		tech: ['Next.js', 'TypeScript', 'MongoDB', 'AI-assisted development'],
		images: [],
		liveUrl: '',
		codeUrl: 'https://github.com/stevenphung60-rgb/business-website-demo'
	}
];

;(function () {

	'use strict';

	var topbarBreakpoint = 1023;

	var hasTopbar = function() {
		return window.innerWidth <= topbarBreakpoint;
	};

	// Menu item the user clicked, kept active until they scroll away from where it landed
	var pinnedNav = null;


	// ---------- Projects ----------
	var placeholder = function() {
		return $('<div class="media-placeholder"></div>').text('Screenshot coming soon');
	};

	var buildMedia = function(project) {
		var $media = $('<div class="project-media"></div>'),
			images = project.images || [];

		if (!images.length) {
			return $media.append(placeholder());
		}

		$.each(images, function(i, src){
			var $item = $('<a class="gallery-item" target="_blank" rel="noopener"></a>').attr('href', src),
				$img = $('<img loading="lazy">').attr({ src: src, alt: project.title + ' screenshot ' + (i + 1) });

			// A wrong path falls back to the placeholder instead of a broken image
			$img.on('error', function(){ $item.empty().append(placeholder()); });
			$media.append($item.toggleClass('is-active', i === 0).append($img));
		});

		if (images.length > 1) {
			var $count = $('<span class="gallery-count"></span>').text('1 / ' + images.length),
				$prev = $('<button type="button" class="gallery-btn prev"></button>').attr('aria-label', 'Previous image'),
				$next = $('<button type="button" class="gallery-btn next"></button>').attr('aria-label', 'Next image'),
				current = 0;

			var show = function(index) {
				current = (index + images.length) % images.length;
				$media.find('.gallery-item').removeClass('is-active').eq(current).addClass('is-active');
				$count.text((current + 1) + ' / ' + images.length);
			};

			$prev.on('click', function(){ show(current - 1); });
			$next.on('click', function(){ show(current + 1); });
			$media.append($('<div class="gallery-nav"></div>').append($prev, $count, $next));
		}

		return $media;
	};

	var buildButton = function(label, url, style) {
		return $('<a target="_blank" rel="noopener"></a>')
			.addClass('btn ' + style)
			.attr('href', url)
			.text(label);
	};

	var renderProjects = function() {
		var $list = $('.js-project-list');

		$.each(projects, function(i, project){
			var $actions = $('<div class="actions"></div>'),
				$body = $('<div class="project-body"></div>');

			if (project.liveUrl) {
				$actions.append(buildButton('Live demo', project.liveUrl, 'btn-primary'));
			}
			if (project.codeUrl) {
				$actions.append(buildButton('Code', project.codeUrl, 'btn-outline'));
			}

			if (project.status) {
				$body.append($('<span class="badge"></span>').text(project.status));
			}
			$body.append(
				$('<h3 class="project-title"></h3>').text(project.title),
				$('<p class="project-desc"></p>').text(project.description),
				$('<p class="project-tech"></p>').text(project.tech.join(' · '))
			);
			if ($actions.children().length) {
				$body.append($actions);
			}

			$list.append(
				$('<article class="card project-card reveal"></article>').append(buildMedia(project), $body)
			);
		});
	};


	// ---------- Fade-in on scroll ----------
	var reveal = function() {
		var $items = $('.reveal');

		if (!('IntersectionObserver' in window)) {
			$items.addClass('is-visible');
			return;
		}

		var observer = new IntersectionObserver(function(entries){
			entries.forEach(function(entry){
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { rootMargin: '0px 0px -8% 0px' });

		$items.each(function(){ observer.observe(this); });
	};


	// ---------- Slide-in menu (below 1024px) ----------
	var closeMenu = function() {
		$('body').removeClass('offcanvas');
		$('.js-nav-toggle').removeClass('active').attr('aria-expanded', 'false');
	};

	var burgerMenu = function() {

		$('.js-nav-toggle').on('click', function(){
			if ($('body').hasClass('offcanvas')) {
				closeMenu();
			} else {
				$(this).addClass('active').attr('aria-expanded', 'true');
				$('body').addClass('offcanvas');
			}
		});

		$('.js-nav-close').on('click', closeMenu);

		$(document).on('keydown', function(event){
			if (event.key === 'Escape' && $('body').hasClass('offcanvas')) {
				closeMenu();
				$('.js-nav-toggle').trigger('focus');
			}
		});

		$(window).on('resize', function(){
			if (!hasTopbar()) {
				closeMenu();
			}
		});

	};


	// ---------- Smooth scroll for in-page links ----------
	var clickMenu = function() {

		$('a[data-nav-section]').on('click', function(event){
			var section = $(this).data('nav-section'),
				$target = $('[data-section="' + section + '"]'),
				reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

			if (!$target.length) {
				return;
			}

			event.preventDefault();
			closeMenu();
			pinnedNav = null;

			var top = section === 'home' ? 0 : $target.offset().top - (hasTopbar() ? $('.topbar').outerHeight() : 0);

			$('html, body').stop().animate({ scrollTop: top }, reduceMotion ? 0 : 500).promise().done(function(){
				pinnedNav = { section: section, top: $(window).scrollTop() };
				navActive(section);
			});
		});

	};


	// ---------- Active menu item while scrolling ----------
	var navActive = function(section) {
		var $items = $('.menu li');
		$items.removeClass('active');
		$items.find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
	};

	// Active section = the last one whose top has passed the trigger line.
	// Same result whichever way the user scrolls, and the last section wins at the page bottom.
	var navigationSection = function() {

		var $section = $('section[data-section]'),
			ticking = false;

		var update = function() {
			var scrollTop = $(window).scrollTop(),
				line = scrollTop + (hasTopbar() ? 160 : 140),
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


	// ---------- "Details" on work cards ----------
	var toggles = function() {

		$('.js-toggle').on('click', function(){
			var $button = $(this),
				$panel = $('#' + $button.attr('aria-controls')),
				$card = $button.closest('.work-card'),
				isOpen = $button.attr('aria-expanded') === 'true';

			$button.attr('aria-expanded', isOpen ? 'false' : 'true');

			if (isOpen) {
				$panel.stop(true, true).slideUp(250, function(){
					$panel.prop('hidden', true).css('display', '');
					$card.removeClass('is-open');
				});
			} else {
				$card.addClass('is-open');
				$panel.prop('hidden', false).hide().stop(true, true).slideDown(250, function(){
					$panel.css('display', '');
				});
			}
		});

	};


	// Document on load.
	$(function(){
		renderProjects();
		reveal();
		burgerMenu();
		clickMenu();
		navigationSection();
		toggles();
	});

}());
