// Create gallery
$(document).ready(function() {
    initGallery('/assets/data/portfolio.json', 3);
});

function initGallery(jsonFile, rows) {

    // Specify bootstrap column elements
    var colSize   = 0;
    var colOffset = 0;

    var newDiv    = {
        newRow : "<div class='row'><div class='col-md-"+colSize+" col-md-offset-1'>",
        newCol : "<div class='col-md-"+colSize+"'>"
    };

    // Add items to portfolio
    $.getJSON(jsonFile, function(data) {
        var items = [];
        var idCounter = 0;

        // Parse JSON to add items to portfolio gallery
        $.each(data.portfolio, function(index, val) {
            var newImage = "";

            // Add a new row
            if (index%rows == 0)
                newImage += newDiv.newRow;
            else
                newImage += newDiv.newCol;

            // Add new portfolio item
            newImage += "<div class='portfolio-item'><img class='img-thumbnail img-responsive' src='" + val.image + "' data-img='"+ val.image +"' data-title='"+ val.title +"' data-caption='"+ val.caption +"'><h4>" + val.title + "</h4></div></div>";

            // Close new row
            if (index%rows == 1)
                newImage += "</div>"
            items.push(newImage);
        });

        // Add items to id: portfolio-gallery
        $(items.join("\n")).appendTo("#portfolio-gallery");
    });
}

// Click on thumbnail
$(document.body).on('click', '.img-thumbnail', function() {
    alert(0);
});
