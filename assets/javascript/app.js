var words = ['awesome', 'stellar', 'cool'];


for (var i = 0; i < words.length; i++) {

    getPronunciation(words[i]);
}

function getPronunciation(word) {

    var pathway = 'http://api.wordnik.com:80/v4/word.json/';
    var parameters = '/audio?useCanonical=true&limit=50';
    var apiKey = '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    var queryURL = pathway + word + parameters + apiKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        $('#sound').html('<source src="' + response[0].fileUrl + '" type="audio/mp3">');
        console.log(response[0]);
    })

}
