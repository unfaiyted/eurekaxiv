"use strict";
(function() {

    // Convert current time to Eorzea time return
    function eTimeCalc() {

        var localEpoch = (new Date()).getTime();
        var epoch = localEpoch * 20.571428571428573;
        var eMinute = parseInt((epoch / (1000 * 60)) % 60);
        var eHour = parseInt((epoch / (1000 * 60 * 60)) % 24);


        return { "hour": eHour , "minute": eMinute};
    }

    function updateTimer() {
        var t = eTimeCalc();

        $('#etime').html(function() {
            return  t.hour +':'+ (t.minute < 10 ? '0' : '') + t.minute ;
        });
    }

    var run = setInterval(updateTimer, 1000);


})();