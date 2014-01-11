/*!
 * MIT License 2014
 * bootstrap-json-gallery
 * codenameyau.github.io
 */

// Initializes gallery, include in main script

function jsonGallery(jsonSource, thumbnailSize, numCols, colOffset) {

    // Initialize modal popup
    initImageModal();

    // Default bootstrap columns
    thumbnailSize = thumbnailSize || 4;
    numCols       = numCols       || 3;
    colOffset     = colOffset     || 0;

    var newThumbnail = {
        newRow : '<div class="row"><div class="col-md-'+thumbnailSize+' col-md-offset-'+colOffset+'">',
        newCol : '<div class="col-md-'+thumbnailSize+'">'
    };

    // Add items to gallery
    $.getJSON(jsonSource, function(data) {
        var count = data.gallery.length;
        var items = [];

        // Parse JSON to add items to gallery gallery
        $.each(data.gallery, function(index, val) {
            var newImage = '';

            // Add a new row
            if (index%numCols == 0)
                newImage += newThumbnail.newRow;
            else
                newImage += newThumbnail.newCol;

            // Add new gallery item
            newImage += '<div class="gallery-item"><img class="img-thumbnail img-responsive img-json-thumnail" src="' + val.images[0].image + '" data-images=\'' + JSON.stringify(val.images) +'\' data-title="'+ val.title +'" data-toggle="modal" data-target="#json-gallery-modal"><h4 class="img-thumbnail-title"><a href="'+ val.link +'" target="_blank">'+ val.title + '</a></h4></div></div>';

            // Close row
            if (index%count == numCols-1)
                newImage += '</div>';
            items.push(newImage);
        });

        // Add items to #bootstrap-json-gallery
        $(items.join("\n")).appendTo("#bootstrap-json-gallery");
    });
}

// Create image modal popup
function initImageModal() {
    $('<div class="modal fade" id="json-gallery-modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body" id="json-gallery-body"><div id="json-gallery-carousel" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators" id="json-gallery-indicators"></ol> <div class="carousel-inner" id="json-gallery-carousel-inner"></div> <a class="left carousel-control" href="#json-gallery-carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#json-gallery-carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span></a> <div class="carousel-footer-bg"></div> </div></div></div></div></div>').appendTo('#bootstrap-json-gallery');
}


$(document).ready(function() {

    // Click on image thumbnail, update modal information
    $(document.body).on('click', '.img-json-thumnail', function() {
        event.preventDefault();
        var galleryTarget = $(this);
        var galleryString = galleryTarget.attr('data-images');
        var galleryImages = JSON.parse(galleryString);
        var galleryIndicators = $("#json-gallery-indicators");
        var galleryBody = $("#json-gallery-carousel-inner");

        // Clear modal contents
        galleryIndicators.html("");
        galleryBody.html("");

        // Add each carousel content
        $.each(galleryImages, function(index, val) {
            if (index == 0) {
                galleryIndicators.append(
                    '<li class="active" data-target="#json-gallery-modal" data-slide-to="'+index+'"></li>');
                galleryBody.append('<div class="item active"><img src="'+val.image+'" alt="'+val.caption+'"> <div class="carousel-caption"><h4 class="json-carousel-caption">'+val.caption+'</h4></div></div>');
            }

            else {
                 galleryIndicators.append(
                    '<li data-target="#json-gallery-modal" data-slide-to="'+index+'"></li>');
                galleryBody.append('<div class="item"><img src="'+val.image+'" alt="'+val.caption+'"> <div class="carousel-caption"> <h4 class="json-carousel-caption">'+val.caption+'</h4> </div> </div>');
            }
        });

        // Hide options
        $("#json-gallery-indicators").hide();
        $(".carousel-footer-bg").hide();
        $(".json-carousel-caption").hide();
    });

    // Fade in out caption
    $(document.body).on('mouseenter', '#json-gallery-body', function() {
        event.preventDefault();
        $("#json-gallery-indicators").fadeIn(400);
        $(".carousel-footer-bg").fadeIn(400);
        $(".json-carousel-caption").fadeIn(400);
    });

    $(document.body).on('mouseleave', '#json-gallery-body', function() {
        event.preventDefault();
        $("#json-gallery-indicators").fadeOut(400);
        $(".carousel-footer-bg").fadeOut(400);
        $(".json-carousel-caption").fadeOut(400);
    });
});

