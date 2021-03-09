$(document).ready(function() {
	$(".mega-menu").hover(
		function() {
			$('.mega-menu-list', this).stop(true, true).slideDown("fast");
			$(this).toggleClass('open');
		},
		function() {
			$('.mega-menu-list', this).stop(true, true).slideUp("fast");
			$(this).toggleClass('open');
		}
	);
});
