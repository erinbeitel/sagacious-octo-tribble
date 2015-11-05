$(document).ready(function () { //Says don't load any of the jquery till the dom is ready for it. (html loads first)

$(".question").click(function(){ // same as jQuery("#q1")
		// console.log($("#q1")); // this console logs q1 when it's clicked.
		console.log("Whohoo! about.js is connected!");
		$(this).next().fadeToggle("fast");
		$(this).children().toggleClass("collapse");

})

});