import SpotifyWebApi from 'spotify-web-api-node';

import spotifyToken from './token';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

console.log(`Spotify Client Id : ${clientId}`);
console.log(`Spotify Client Secret : ${clientSecret}`);

const spotifyApi = new SpotifyWebApi({ clientId, clientSecret });

spotifyToken.createAccessToken(spotifyApi)
  .then(token => spotifyApi.setAccessToken(token));

export default {
  getTrack: async (trackId) => {
    const trackData = await spotifyApi.getTrack(trackId);
    return trackData;
  },
};
