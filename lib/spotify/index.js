import SpotifyWebApi from 'spotify-web-api-node';

import spotifyToken from './token';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({ clientId, clientSecret });

spotifyToken.createAccessToken(spotifyApi)
  .then(token => spotifyApi.setAccessToken(token));

export default {
  getTrack: async (trackId) => {
    const trackData = await spotifyApi.getTrack(trackId);

    return trackData;
  },
};
