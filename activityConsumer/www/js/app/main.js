define(function (require) {
    /**
     * This application will consume activity from activity producer.
     */

    var consumed = document.getElementById("consumed");

    navigator.mozSetMessageHandler('activity', function(/*MozActivityRequestHandler*/ activityRequest) {
        var /*MozActivityOptions */ option = activityRequest.source;

        if (option.name === "myapp.activity") {
            var messageFromProducer = option.data.msg.text;
            consumed.innerHTML = messageFromProducer;

            if (messageFromProducer) {
                activityRequest.postResult("Activity received by consumer.");
            } else {
                activityRequest.postError("Error happend during the activity consuming.");
            }
        }
    });
});
