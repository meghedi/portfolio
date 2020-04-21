let inputValCount = 0;
$(document).ready(function () {
    //reset();
});

$('.mainLinks li').on('click', function (event) {
    event.preventDefault();
    let curr = $(this)
    let partName = $(this).attr("data-part");
    $('.sections, .subTitle').fadeOut(300, function () {
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

$('input, textarea').on('mousedown', function () {
    if(inputValCount ===0){
    resetLabel();
    }
    $(this).closest('.form-group').find('label').eq(0).css({ 'top': '2px', 'font-size': '9px' });
});

$('input, textarea').on('keyup', function () {
    inputValCount = $(this).val().length;
    console.log(inputValCount);
});

$('body').on('click', function (e) {

    if (e.target.nodeName !== 'INPUT' && e.target.nodeName != 'TEXTAREA') {
    if(inputValCount ===0){
        resetLabel();
        }
    }
});

function resetLabel() {
    $('.form-group label').css({ 'top': '6px', 'font-size': '14px' });
}

function reset() {
    $('.sections, .subTitle').fadeIn(300, function () {
        $('#descriptions, .desc').fadeOut();
        $('ul li').css({ 'height': '400px', 'padding': '250px 0px 0px 0px' });
    });

    $('input, textarea').val('');
    resetLabel();
}


