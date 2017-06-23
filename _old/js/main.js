$(document).ready(function() {
    $('.section-collapsible .section-title').click(function() {
        var $this = $(this);
        // hide of show the section's body
        $this.parent().children('.section-body').toggle();

        // change the title's caret direction
        var $i = $this.find('i').first();

        if ($i.hasClass('fa-caret-right')) {
            $i.removeClass('fa-caret-right');
            $i.addClass('fa-caret-down');
        } else {
            $i.removeClass('fa-caret-down');
            $i.addClass('fa-caret-right');
        }
    });

    // hide all the collapsible bodies
    $('.section-collapsible .section-body').hide();


    // adjust the map iframe to the page
    var $map = $('#map-iframe');
    $map.height( $(window).height() );
    $map.width( $(window).width() - $('#sidebar').width() );
});

$(window).resize(function() {
    // adjust the map iframe to the page
    var $map = $('#map-iframe');
    $map.height( $(window).height() );
    $map.width( $(window).width() - $('#sidebar').width() );
});