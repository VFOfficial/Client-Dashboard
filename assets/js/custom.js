// Sidebar Toggler

$('.sidebar-toggler').click(function () {
    $('.sidebar, .content').toggleClass("open");
    return false;
});

// Challenge Table
$('#step-1 .btn').on('click', function(event) {
    $(".btn").removeClass("active-1");
    $(this).addClass("active-1");
    var val = $(this).find('input').val();
    $('#step-1-output').html(val);
});
$('#step-2 .btn').on('click', function(event) {
    $(".btn").removeClass("active-2");
    $(this).addClass("active-2");
    var val = $(this).find('input').val();
    $('#step-2-output').html(val);
});
$('#instant .btn').on('click', function(event) {
    $(".btn").removeClass("active-3");
    $(this).addClass("active-3");
    var val = $(this).find('input').val();
    $('#instant-output').html(val);
});

// F.A.Q accordion
$("#accordionExample")
    .on("show.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").addClass("accordion-animation");
})
    .on("hide.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").removeClass("accordion-animation");
});	
$("#accordionExample2")
    .on("show.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").addClass("accordion-animation");
})
    .on("hide.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").removeClass("accordion-animation");
});	

// Active Anchor Link
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});
