$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    function addAnimation() {
        function generateNum() {
            let random = Math.floor((Math.random() * 6));
            if (random === 6) {
                random--;
            }
            return random;
        }
        let randomNumber = generateNum();
        console.log('random number: ' + randomNumber);

        let animateArray = ['animated bounce',
            'animated flash',
            'animated pulse',
            'animated rubberBand',
            'animated tada',
            'animated wobble']; 

        let animateClass = animateArray[randomNumber];
        $("#animate").addClass(animateClass);
    }
    addAnimation();
});

