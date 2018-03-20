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

    var runTime = setInterval(updateTimer, 1000);


    $('.spawn').hover(function () {
            $(this).css('background-color','#e1d7cf');

        }, function () {
            $(this).hasClass("spawned") ? $(this).css('background-color','#ffaa73') :  $(this).css('background-color','#FFF');
        }
    );

     $('.kill').click(function() {
         var parent = $(this).parent().parent();

         parent.addClass('editing');

        // console.log(parent.find('.lvl').html());
         $('#reportTitle').html(function () {
            return   parent.find('.NM').html();
         });

     });


     $('#hide-spawned').click(function () {
         $('.spawned').toggle();

         $(this).text(($(this).text() === 'Hide Spawned') ?  'Show Spawned' :  'Hide Spawned');
     });

    $('.copy-btn').on("click", function(){
        var value = $(this).data('clipboard-text');

        $('.notify-text').removeClass('notify-text');
        $('#copy-text').html(function () {
           return  value;
        });

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
    })


    // $('#cancel-edit')


})();