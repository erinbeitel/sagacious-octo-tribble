$(document).ready(function () { //Says don't load any of the jquery till the dom is ready for it.
    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function (event) {
            event.preventDefault(); // submit event prevented
            
            var item = $("#todo-list-item").val(); //saving input item to variable. if item instead of var item it would be a global variable.

            if (item) {
                    $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
                    localStorage.setItem("listItems", $("#list-items").html()); //setItem is a method that is available on the localStorage API. Calling the key listItems. The value is the entire html block of the ul.
                    $("#todo-list-item").val(""); // clears out the text box after posting the to do item.
            }
    });

    // $(".checkbox").change(function(){
    //  console.log("Checkbox checked!");
    // })

        $(document).on("change", ".checkbox", function() {
                
                if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");

                } else {
                        $(this).attr("checked", "checked");
                }

                $(this).parent().toggleClass("completed") //parent of the checkbox is the list item. could also use click instead of change.
                localStorage.setItem("listItems", $("#list-items").html());
        });

        $(document).on("click", ".remove", function() {
                // $(this).parent().fadeOut("slow", function() { // Callback. instead of $(this).parent().remove() Doing the fadeOut and then calling a function that does the removal once the fadeOut is done. 
                    $(this).parent().remove();
                    localStorage.setItem("listItems", $("#list-items").html());
                // })

        });



});