$(document).ready(function () { //Says don't load any of the jquery till the dom is ready for it.
    $(".add-items").submit(function(event) {
    		event.preventDefault(); // submit event prevented
    		
    		var item = $("#todo-list-item").val(); //saving input item to variable. if item instead of var item it would be a global variable.

    		$("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");

    		$("#todo-list-item").val(""); // clears out the text box after posting the to do item.
    });
});