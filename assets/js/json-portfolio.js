/*!
 * GNU General Public License 2014
 * json-bs-portfolio.js
 * codenameyau.github.io
 */

// Initializes gallery, include in main script
function jsonGallery(jsonFile, rows, colSize, colOffset) {

    // Initialize modal popup
    initImageModal();

    // Default bootstrap columns
    colSize   = colSize   || 4;
    colOffset = colOffset || 2;

    var newDiv    = {
        newRow : '<div class="row"><div class="col-md-'+colSize+' col-md-offset-'+colOffset+'">',
        newCol : '<div class="col-md-'+colSize+'">'
    };

    // Add items to portfolio
    $.getJSON(jsonFile, function(data) {
        var items = [];

        // Parse JSON to add items to portfolio gallery
        $.each(data.portfolio, function(index, val) {
            var newImage = '';

            // Add a new row
            if (index%rows == 0)
                newImage += newDiv.newRow;
            else
                newImage += newDiv.newCol;

            // Add new portfolio item
            newImage += '<div class="portfolio-item"><img class="img-thumbnail img-responsive" src="' + val.image + '" data-img="'+ val.image +'" data-title="'+ val.title +'" data-caption="'+ val.caption +'" data-toggle="modal" data-target="#jsonPortfolioModal"><h4>' + val.title + '</h4></div></div>';

            // Close new row
            if (index%rows == 1)
                newImage += '</div>';
            items.push(newImage);
        });

        // Add items to id: portfolio-gallery
        $(items.join("\n")).appendTo("#portfolio-gallery");
    });
}

// Create image modal popup
function initImageModal() {
    $('<div class="modal fade" id="jsonPortfolioModal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel" id="jsonPortfolioTitle">Hello World</h4></div><div class="modal-body" id="jsonPortfolioBody"></div></div></div></div>').appendTo('#portfolio-gallery');}


// Click on thumbnail
$(document.body).on('click', '.img-thumbnail', function() {
});
