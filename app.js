"use strict"
$(document).ready(function () {
    let counter = 0;
    var currentText;
    var delay = 1000;
    var timeout;
    var keypressTimeout;
    var limitToreset;
    $('.key').bind('mousedown', function (ev) {
        limitToreset = $(ev.currentTarget).find('span')[0].innerHTML.split(' ').length;
        var inputText = $('#result').val();
        keypressTimeout = setTimeout(function () {
            inputText += $(ev.currentTarget).attr('data-value');
            $('#result').val(inputText);
            keypressTimeout = null;
        }, delay);
    }).bind('mouseup', function (ev) {
        clearTimeout(keypressTimeout);
        if (!keypressTimeout) {
            return false;
        }
        var inputText = $('#result').val();
        if (currentText === $(ev.currentTarget).attr('data-value')) {
            counter++;
            if (counter === limitToreset) {
                counter = 0;
            }
        }
        if (counter !== 0 && currentText === $(ev.currentTarget).attr('data-value')) {
            inputText = inputText.substring(0, inputText.length - 1);
        }
        inputText = inputText + $(ev.currentTarget).find('span')[0].innerHTML.split(' ')[counter];
        currentText = $(ev.currentTarget).attr('data-value');
        $('#result').val(inputText);
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            counter = 0;
            currentText = null;
        }, delay);
    });
});
