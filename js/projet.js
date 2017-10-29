jQuery(document).ready(function() {

    $("#b1").mouseover(
        function() {
            $('#m1').show();
            $('#b1').hide();
        }
    )
    $("#m1").mouseout(
        function() {
            $('.title').show();
            $('.hover').hide();
        }
    )
    $("#b2").mouseover(
        function() {
            $('#m2').show();
            $('#b2').hide();
        }
    )
    $("#m2").mouseout(
        function() {
            $('.title').show();
            $('.hover').hide();
        }
    )
    $("#b3").mouseover(
        function() {
            $('#m3').show();
            $('#b3').hide();
        }
    )
    $("#m3").mouseout(
        function() {
            $('.title').show();
            $('.hover').hide();
        }
    )
    $("#b4").mouseover(
        function() {
            $('#m4').show();
            $('#b4').hide();
        }
    )
    $("#m4").mouseout(
            function() {
                $('.title').show();
                $('.hover').hide();
            }
        )
        // Skills Bars
    $('.skill-percent').each(function() {
        $(this).animate({
            width: $(this).attr('data-percent')
        }, "fast");
    });
});