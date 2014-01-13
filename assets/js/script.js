$(function() {
    jsonGallery('/assets/data/gallery.json', 5, 2, 1);
    $("#email-address").html('codenameyau &#64; gmail.com');
    $("#start-btn").transition({y: '40px', delay: 5000});
});

// Transition
$(".tagline").hover(
    function() {
        $(this).transition({scale: 1.2})},
    function() {
        $(this).transition({scale: 1.0})}
);

$(".service-icon, .lg-icon").hover(
    function() {
        $(this).transition({rotate: '45deg'})},
    function() {
        $(this).transition({rotate: '0deg'})
    }
);
