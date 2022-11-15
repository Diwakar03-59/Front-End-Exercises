$(document).ready(function(){
	$(".Header").click(function(){
		$(".Header").css("background-color", "purple")
	});
	$(".sidebar").click(function(){
		$("#side").text("Leftbar")
		$(".sidebar").css("background-color", "purple")
	});
	$(".extra-content").click(function(){
		$(".main-content").fadeOut()
		$(".extra-content").css({"margin-top": "-800px", "background-color": "purple"})
	});
	$(".footer").click(function(){
		$(".footer").text("I don't change color bro !!")
		$(".footer").css({"margin-bottom": "20px", "text-align": "center", "vertical-align": "middle"})
	});
});