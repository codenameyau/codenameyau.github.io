/*!
 * MIT License 2014
 * bootstrap-json-gallery
 * codenameyau.github.io
 */

// Initializes gallery, include in main script
function jsonGallery(jsonFile, thumbnailSize, numCols, colOffset) {

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
    $.getJSON(jsonFile, function(data) {
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
            newImage += '<div class="gallery-item"><img class="img-thumbnail img-responsive img-json-gallery" src="' + val.image + '" data-img="'+ val.image +'" data-title="'+ val.title +'" data-caption="'+ val.caption +'" data-toggle="modal" data-target="#jsonGalleryModal"><h4><a href="'+ val.link +'" target="_blank">'+ val.title + '</a></h4></div></div>';

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
    $('<div class="modal fade" id="jsonGalleryModal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body" id="jsonGalleryBody"></div><div class="modal-footer json-gallery-caption" id="jsonGalleryCaption"></div></div></div></div>').appendTo('#bootstrap-json-gallery');}


// Click on image thumbnail, update modal information
$(document.body).on('click', '.img-json-gallery', function() {
    var imgTarget  = $(this);
    var imgLoaded  = '<img class="img-thumbnail" src="'+imgTarget.attr('data-img')+'">';
    var imgCaption = imgTarget.attr('data-title') + "<br>" + imgTarget.attr('data-caption');
    $("#jsonGalleryTitle").text(imgTarget.attr('data-title'));
    $("#jsonGalleryBody").html(imgLoaded);
    $("#jsonGalleryCaption").html(imgCaption);
});
