"use strict";
(function() {

    // Convert current time to Eorzea time return
    function eTimeCalc() {
        // var d = new Date();
        // var m = new Date();
        // var sinceMidnight =  d - m.setHours(0,0,0,0);
        //
        //
        // //console.log(sinceMidnight);
        //
        // var minutes = Math.floor(sinceMidnight / 60000);
        // var seconds = ((sinceMidnight % 60000) / 1000).toFixed(0);
        // //console.log( minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
        //
        // var totalSeconds = (minutes*60)+seconds;
        // var eMinutes = (totalSeconds/2.916666);
        //
        // console.log(eMinutes);
        //
        //
        // var eMinute = Math.floor(eMinutes % 60);
        // var totalHour = eMinutes / 60;
        // var eHour = totalHour % 24;
        //
        //
        // console.log(eHour + ':' + eMinutes);


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

    var runTime = eTimeCalc();
    var run = setInterval(updateTimer, 1000);


})();