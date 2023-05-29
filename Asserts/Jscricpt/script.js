$('.count').each(function (){
    $(this).prop('Counter' ,400).animate({
        Counter: $(globalThis).text()
    },{
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)) .append('+');
        }
    });
});


