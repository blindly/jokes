$( document ).ready()
{      
    //var redditApi = "http://www.reddit.com/r/jokes/hot.json?limit=50";
    //fetchReddit( redditApi );
    
    $( "#funny" ).click(function()
    {
        var redditApi = "http://www.reddit.com/r/jokes/hot.json?limit=50";
        fetchReddit( redditApi );
    });
    
    $( "#unfunny" ).click(function()
    {
        var redditApi = "http://www.reddit.com/r/antijokes/hot.json?limit=50";
        fetchReddit( redditApi );
    });
}

function fetchReddit( redditApi )
{
    //redditApi = "http://www.reddit.com/r/jokes/hot.json?limit=50";
    $.getJSON(redditApi, function( json ){

        var jokes = json.data.children;
        var jokesDiv = document.getElementById('jokes');

        $.each( jokes, function( key, value) {

            title = jokes[key]['data']['title'];
            text = jokes[key]['data']['selftext'];
            score = jokes[key]['data']['score'];

            $('#jokes > tbody:last').append('<tr><td>' + score + '</td><td><b>' + title + '</b> ' + text +'</td></tr>');
        });
    });   
}