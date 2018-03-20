"use strict";
(function() {

    // Convert current time to Eorza time return
    function eTimeCalc() {
        var serverTime = new Date();
        return { "hour": 1, "minute": 2, "seconds": 3 };
    }

    function updateTimer() {
        var time = eTimeCalc();

        console.log('test');

        $('#etime').html(function() {
            return '123';
        });
    }

    // 2 11/12 seconds = 1 minute Eorzea
    // 2min 55s = 1 hour
    // 70m = 24 hours

    var runTime = eTimeCalc();

    var run = setInterval(updateTimer, 1000);
    console.log('test');


})();