$(function() {
    jsonGallery('/assets/data/gallery.json', 5, 2, 1);
    $("#contact-info").html('&#99;&#111;&#100;&#101;&#110;&#97;&#109;&#101;&#121;&#97;&#117;&#32;&#64;&#32;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;');
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
