$(document).ready(function () {
    //reset();
});

$('.mainLinks li').on('click', function (event) {
    event.preventDefault();
    let curr = $(this)
    let partName = $(this).attr("data-part");
        $('.sections, .subTitle').fadeOut(300, function(){
            $('ul li').css({ 'height': 'auto', 'padding': '20px' });
        });

    $('#descriptions, .closeBtn, #' + partName).fadeIn(300, function () {
        $(curr).fadeIn();
    });
});

$('.closeBtn').on('click', function () {
    reset();
});

$('h1 a, h5 a').on('click', function () {
    reset();
});

function reset() {
    $('.sections, .subTitle').fadeIn(300, function () {
        $('#descriptions, .desc').fadeOut();
        $('ul li').css({ 'height': '400px', 'padding': '250px 0px 0px 0px' });
        
    });
}
