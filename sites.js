$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
$('.nav-tabs a').on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})

$(document).bind("contextmenu", function(e) {
    e.preventDefault();
});

$(document).keydown(function(e) {
    if (e.which === 123) {
        return false;
    }
});
