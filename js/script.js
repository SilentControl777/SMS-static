//Main Template
	(function($) {
		"use strict"; // Start of use strict

		// Toggle the side navigation
		$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
			$("body").toggleClass("sidebar-toggled");
			$(".sidebar").toggleClass("toggled");
			if ($(".sidebar").hasClass("toggled")) {
				$('.sidebar .collapse').collapse('hide');
			};
		});

		// Close any open menu accordions when window is resized below 768px
		$(window).resize(function() {
			if ($(window).width() < 768) {
				$('.sidebar .collapse').collapse('hide');
			};
		});

		// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
		$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
			if ($(window).width() > 768) {
				var e0 = e.originalEvent,
					delta = e0.wheelDelta || -e0.detail;
				this.scrollTop += (delta < 0 ? 1 : -1) * 30;
				e.preventDefault();
			}
		});

	})(jQuery);

// Show/Hide Sidebar on outside click
	$(document).click(function(event) {
		var clickover = $(event.target);
		var $navbar = $(".collapse");
		var _opened = $navbar.hasClass("show");
		if (_opened === true && !clickover.hasClass("nav-link")) {
			$navbar.collapse('hide');
		}
	});

// Custom form components
	$(function() {
		jcf.replaceAll();
	});

// Date Time Pickers
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	// Get today's date
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	$(function() {
		//Time Picker Config
		// $('.timepicker-input').datetimepicker({
		//     format: 'LT'
		// });
		$('.datetimepicker-input').datetimepicker({
			format: 'L',
			minDate: today
		});

		$('.datetimepicker-input-test').datetimepicker({
			format: 'L'
		});
	});

// Data Table
// $(function () {
//     $('.tableContainer .dataTable').DataTable();
// });

// Dark and Light Mode auto change after 5PM
	$(function() {

		var hour = (new Date).getHours();
		if (hour >= 17) {
			$('html').attr('data-theme', 'dark');
			document.getElementById("theme-switch-icon").classList.remove('sms-icon-dark');
			document.getElementById("theme-switch-icon").classList.add('sms-icon-light');
		} else {
			$('html').attr('data-theme', 'light');
			document.getElementById("theme-switch-icon").classList.remove('sms-icon-light');
			document.getElementById("theme-switch-icon").classList.add('sms-icon-dark');
		}

	});

// Dark and Light Mode Switcher
	const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
	const currentTheme = localStorage.getItem('theme');

	if (currentTheme) {
	    document.documentElement.setAttribute('data-theme', currentTheme);

	    if (currentTheme === 'dark') {
	        toggleSwitch.checked = true;
	    }
	}

	function switchTheme(e) {
	    if (e.target.checked) {
	        document.documentElement.setAttribute('data-theme', 'dark');
	        localStorage.setItem('theme', 'dark');
			document.getElementById("theme-switch-icon").classList.remove('sms-icon-dark');
			document.getElementById("theme-switch-icon").classList.add('sms-icon-light');
	    }
	    else {        
	    	document.documentElement.setAttribute('data-theme', 'light');
	        localStorage.setItem('theme', 'light');
	        document.getElementById("theme-switch-icon").classList.remove('sms-icon-light');
			document.getElementById("theme-switch-icon").classList.add('sms-icon-dark');
	    }    
	}

	toggleSwitch.addEventListener('change', switchTheme, false);

// Toggle Filter
	(function($) {
		"use strict"; // Start of use strict

		$(".filter-container .primary-btn").click(function() {
			$(".filter-form-container").toggleClass('show');
		});

	})(jQuery);