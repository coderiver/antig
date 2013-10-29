$(document).ready(function() {
	// SELECTBOX
	$('.select select').change(function (e) {
		$(this).next().val($(this).val());
	});
});