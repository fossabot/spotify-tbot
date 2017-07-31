const createAccessToken = async (spotifyApi) => {
  const data = await spotifyApi.clientCredentialsGrant();
  return data.body.access_token;
};

export default { createAccessToken };
