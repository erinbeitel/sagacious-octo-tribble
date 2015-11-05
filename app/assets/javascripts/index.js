$(".question").click(function(){ // same as jQuery("#q1")
		// console.log($("#q1")); // this console logs q1 when it's clicked.
		$(this).next().fadeToggle("fast");
		$(this).children().toggleClass("collapse");

})