$(document).ready(function(){
	$(".footer").click(function() {
		$(".popup-overlay, .popup-content").addClass("active");	
	});

	$(".close, .popup-overlay").click(function(){
		$(".popup-overlay, .popup-content").removeClass("active");
	});
});
