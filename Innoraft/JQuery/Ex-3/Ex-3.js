$(document).ready(function(){
	$(".Submit").click(function(){
		if ($(".fname").val() == "" || $(".lname").val() == "") {
			alert("Please fill all the fields!!");
		}
		else {
			alert("Form submitted successfully!!");
		}
	});
});