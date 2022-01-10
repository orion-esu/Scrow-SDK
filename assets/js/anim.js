$(".btn-switcher").on('click', function (e) {
    e.preventDefault();
    $(".btn-switcher").removeClass("__activetab");
    $(this).addClass("__activetab");
    var tab = $(this).attr("data-tab");
    $(".wrapper").addClass("hide");
    $(".wrapper[data-state='" + tab + "']").removeClass('hide');
    if (tab == "card") {
        $(".wrapper[data-state='card']").find(".ccFormatMonitor").focus();
    } else {
        var timer2 = "30:00";
        var interval = setInterval(function() {
        var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            $('.timer').html(minutes + ':' + seconds);
            if (minutes < 0) 
                clearInterval(interval);
            
            //check if both minutes and seconds are 0
            if ((seconds <= 0) && (minutes <= 0)) 
                clearInterval(interval);
                timer2 = minutes + ':' + seconds;
        }, 1000);
    }
})

$(".ccFormatMonitor").on('keyup', function (e) {
    e.preventDefault();
    var cclength = $(this).val().length;
    if (cclength > 21) {
        $("#inputExpDate").focus();
    } else {
        return true;
    }
})

$("#inputExpDate").on('keyup', function (e) {
    e.preventDefault();
    var explength = $(this).val().length;
    if (explength > 6) {
        $(".cvv").focus();
    } else {
        return true;
    }
})

$(".cvv").on('keyup', function (e) {
    e.preventDefault();
    var cvvlength = $(this).val().length;
    if (cvvlength > 3) {
        return false;
    } else {
        return true;
    }
})