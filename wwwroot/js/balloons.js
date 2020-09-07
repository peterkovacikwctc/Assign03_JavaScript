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

    // show toast with submit button if no balloons are checked
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

    // button to check/uncheck all balloons
    $(function () {
        $('.checkAll').on('click', function (e) {
            e.preventDefault();

            let redChecked = $('#red').prop('checked');
            let greenChecked = $('#green').prop('checked');
            let blueChecked = $('#blue').prop('checked');

            // if all are unchecked, check all
            if (redChecked === false && greenChecked === false && blueChecked === false) {
                $("#red").click();
                $("#green").click();
                $("#blue").click();
            }

            // if all are checked, uncheck all
            else if (redChecked === true && greenChecked === true && blueChecked === true) {
                $("#red").click();
                $("#green").click();
                $("#blue").click();
            }

            // if some are checked, check all
            else {
                if (redChecked === false) $("#red").click();
                if (greenChecked === false) $("#green").click();
                if (blueChecked === false) $("#blue").click();
            }
        });
    });
});

