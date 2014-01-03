$(document).ready(function() {

    // Add items to portfolio
    $.getJSON('/assets/data/portfolio.json', function(data) {
        var items = [];
        var idCounter = 0;

        // Parse JSON to add items to portfolio gallery
        $.each(data.portfolio, function(index, val) {
            var newDiv = "";
            // Add a new row
            if (index%2 == 0)
                newDiv += "<div class='row'><div class='col-md-4 col-md-offset-2 text-center'>";
            else
                newDiv += "<div class='col-md-4 text-center'>";

            newDiv += "<div class='portfolio-item'><a href='#'><img class='img-portfolio img-thumbnail img-responsive' src='" + val.image + "' data-img='"+ val.image +"' data-title='"+ val.title +"' data-caption='"+ val.caption +"'></a><h4>" + val.title + "</h4></div></div>";

            // Close new row
            if (index%2 == 1)
                newDiv += "</div>"
            items.push(newDiv);
        });

        // Add items to id: portfolio-gallery
        $(items.join("\n")).appendTo("#portfolio-gallery");

    });
});
