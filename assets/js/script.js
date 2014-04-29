$(function() {
    jsonGallery('/assets/data/gallery.json', 5, 2, 1);
    $("#contact-info").html('&#99;&#32;&#111;&#32;&#100;&#32;&#101;&#32;&#110;&#32;&#97;&#32;&#109;&#32;&#101;&#32;&#121;&#32;&#97;&#32;&#117;&#32;&#32;&#32;&#64;&#32;&#32;&#32;&#103;&#32;&#109;&#32;&#97;&#32;&#105;&#32;&#108;&#32;&#46;&#32;&#99;&#32;&#111;&#32;&#109;');
});

// Transition
$(".tagline").hover(
    function() {
        $(this).transition({scale: 1.2});
    },
    function() {
        $(this).transition({scale: 1.0});
    }
);

$(".service-icon, .lg-icon").hover(
    function() {
        $(this).transition({rotate: '45deg'});
    },
    function() {
        $(this).transition({rotate: '0deg'});
    }
);
