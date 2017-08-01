import SpotifyWebAPI from 'spotify-web-api-node';

const spotifyAPI = new SpotifyWebAPI({
    clientId : process.env.SPOTIFY_CID,
    clientSecret : process.env.SPOTIFY_CSECRET,
    redirectUri : 'http://www.example.com/callback'
});

spotifyAPI.clientCredentialsGrant()
    .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyAPI.setAccessToken(data.body['access_token']);
        //require('./token')(spotifyAPI, data.body['access_token']);
    }, function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    });

export default function(bot) {
    const spotifyRegex = /spotify:(\w+):(\w+)/;

    bot.onText(spotifyRegex, (msg) => {
        const groups = spotifyRegex.exec(msg.text);
        const type = groups[1];
        const searchQuery = groups[2];

        if(type === 'track') {
            spotifyAPI.getTrack(searchQuery)
                .then((data) => {
                    bot.sendMessage(msg.chat.id, `${data.body.name} / ${data.body.album.name}`)
                })
                .catch((err) => {
                    console.log(`ERROR : ${err}`)
                });
        } else if (type === 'user') {

        }

        console.log(`${msg.from.username} request ${searchQuery} of ${type}!`);
    });
}