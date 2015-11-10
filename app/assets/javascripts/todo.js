$(document).ready(function () { //Says don't load any of the jquery till the dom is ready for it.
    $(".add-items").submit(function(event) {
    		event.preventDefault(); // submit event prevented
    		
    		var item = $("#todo-list-item").val(); //saving input item to variable. if item instead of var item it would be a global variable.

    		if (item) {
    				$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
    				$("#todo-list-item").val(""); // clears out the text box after posting the to do item.
    		}
    });

    // $(".checkbox").change(function(){
    // 	console.log("Checkbox checked!");
    // })

		$(document).on("change", ".checkbox", function() {
			$(this).parent().toggleClass("completed") //parent of the checkbox is the list item. could also use click instead of change.
		});

		$(document).on("click", ".remove", function() {
				$(this).parent().remove()
		});

});