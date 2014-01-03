$(function() {
    $("#email-address").html('codenameyau &#64; gmail.com');
    $("h2").transition({scale: 1.2, delay: 2000 });
    $("#start-btn").transition({y: '80px', delay: 5000});
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
