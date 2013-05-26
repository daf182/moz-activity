define(function (require) {
    /**
     * This application will produce activity with a user typed message.
     */

    var activityMessage = document.getElementById("activiyMessasge");
    var status = document.getElementById("status");
    var button = document.getElementById("send");


    button.addEventListener("click", function () {
        var activity = new MozActivity({
            // Ask for the "pick" activity
            name: "myapp.activity",

            // Provide de data required by the filters of the activity
            data: {
                type: "text/msg",
                msg: activityMessage.value
            }
        })

        activity.onsuccess = function() {
            var activityResult = this.result;
            status.innerHTML = ["The message has been received!", activityResult].join(' ');
        };

        activity.onerror = function() {
            status.innerHTML = ["The message has been received!", this.error].join(' ');
        };
    });


});
