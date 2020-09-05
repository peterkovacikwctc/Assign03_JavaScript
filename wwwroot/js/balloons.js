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

    $(function () {
        $('.checkToToast').on('click', function (e) {
            e.preventDefault();

            let redChecked = $('#red').prop('checked');
            console.log('red checked: ' + redChecked);

            let greenChecked = $('#green').prop('checked');
            console.log('green checked: ' + greenChecked);

            let blueChecked = $('#blue').prop('checked');
            console.log('blue checked: ' + blueChecked);

            if (redChecked === false && greenChecked === false && blueChecked === false) {
                $('#toast').toast({ autohide: false }).toast('show');
            }
        });
    });
});

