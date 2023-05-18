// Task 1:
// 3 times number function

var triple = function(num) {
    result = 3 * num;
    return result
}


// Task 2: 
// highlight third and last li element

var highlight = function() {

    // third element
    $("ul li").eq(2).css({
        color: "red",
        fontWeight: "bold"
    })

    //last element
    $("li:last").css({
        color: "red",
        fontWeight: "bold"
    })


    // with css class task
    $("ul li").eq(2).addClass("oznaceny");
    $("li:last").toggleClass("oznaceny");

}

// Task 3: 
    
    $("li").removeClass("selected");
    
    $("li a").on("click", prevent, false);

    
    function prevent(event) {
        event.preventDefault();
    }