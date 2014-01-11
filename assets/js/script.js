$(function() {
    // Initialize gallery
    jsonGallery('/assets/data/gallery.json', 4, 3, 0);
    $("#email-address").html('codenameyau &#64; gmail.com');
    $("#start-btn").transition({y: '40px', delay: 5000});
});

// Transition
$("h2").hover(
    function() {
        $(this).transition({scale: 1.2})},
    function() {
        $(this).transition({scale: 1.0})
    }
);

$(".service-icon, .lg-icon").hover(
    function() {
        $(this).transition({rotate: '45deg'})},
    function() {
        $(this).transition({rotate: '0deg'})
    }
);
