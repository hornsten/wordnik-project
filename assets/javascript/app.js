function getPronunciation(word) {

    var pathway = 'http://api.wordnik.com:80/v4/word.json/';
    var parameters = '/audio?useCanonical=true&limit=10';
    var apiKey = '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    var queryURL = pathway + word + parameters + apiKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {

        console.log(response);
        var theSound = response[0].fileUrl;

        audio = new Audio(theSound);
        var theText = response[0].word;

        $('#sound').append('<h3>' + theText + '</h3>')
            .append('<audio controls source src="' + theSound + '" type="audio/mp3"></audio>');
    })

}

$(document).ready(function() {
    // Function to get input value.
    $('#text_value').click(function() {
        var text_value = $("#text").val();
        if (text_value == '') {
            alert("Enter Some Text In Input Field");
        } else {
            getPronunciation(text_value);
        }
    });

    $('#text_reset').click(function() {
        $("#text").val('');

    });


});
