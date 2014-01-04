/*!
 * GNU General Public License 2014
 * json-bs-portfolio.js
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

    // Add items to portfolio
    $.getJSON(jsonFile, function(data) {
        var count = data.portfolio.length;
        var items = [];

        // Parse JSON to add items to portfolio gallery
        $.each(data.portfolio, function(index, val) {
            var newImage = '';

            // Add a new row
            if (index%numCols == 0)
                newImage += newThumbnail.newRow;
            else
                newImage += newThumbnail.newCol;

            // Add new portfolio item
            newImage += '<div class="portfolio-item"><img class="img-json-portfolio img-thumbnail img-responsive" src="' + val.image + '" data-img="'+ val.image +'" data-title="'+ val.title +'" data-caption="'+ val.caption +'" data-toggle="modal" data-target="#jsonPortfolioModal"><h4><a href="'+ val.link +'" target="_blank">'+ val.title + '</a></h4></div></div>';

            // Close row
            if (index%count == numCols-1)
                newImage += '</div>';
            items.push(newImage);
        });

        // Add items to #portfolio-gallery
        $(items.join("\n")).appendTo("#portfolio-gallery");
    });
}

// Create image modal popup
function initImageModal() {
    $('<div class="modal fade" id="jsonPortfolioModal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header json-portfolio-title"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="jsonPortfolioTitle">Hello World</h3></div><div class="modal-body" id="jsonPortfolioBody"></div><div class="modal-footer json-portfolio-caption" id="jsonPortfolioCaption"></div></div></div></div>').appendTo('#portfolio-gallery');}


// Click on image thumbnail, update modal information
$(document.body).on('click', '.img-json-portfolio', function() {
    var imgTarget = $(this);
    var imgLoaded = '<img class="img-thumbnail" src="'+imgTarget.attr('data-img')+'">';
    $("#jsonPortfolioTitle").text(imgTarget.attr('data-title'));
    $("#jsonPortfolioBody").html(imgLoaded);
    $("#jsonPortfolioCaption").html(imgTarget.attr('data-caption'));
});
