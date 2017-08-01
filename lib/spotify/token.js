const authorizationCode = 'AQAgjS78s64u1axMCBCRA0cViW_ZDDU0pbgENJ_-WpZr3cEO7V5O-JELcEPU6pGLPp08SfO3dnHmu6XJikKqrU8LX9W6J11NyoaetrXtZFW-Y58UGeV69tuyybcNUS2u6eyup1EgzbTEx4LqrP_eCHsc9xHJ0JUzEhi7xcqzQG70roE4WKM_YrlDZO-e7GDRMqunS9RMoSwF_ov-gOMpvy9OMb7O58nZoc3LSEdEwoZPCLU4N4TTJ-IF6YsQRhQkEOJK';

const createAccessToken = async (spotifyApi) => {
  const data = await spotifyApi.clientCredentialsGrant();
  return data.body.access_token;
};

const startRefreshingAccessToken = async (spotifyApi) => {
  const refreshData = (await spotifyApi.authorizationCodeGrant(authorizationCode)).body;

  spotifyApi.setAccessToken(refreshData.access_token);
  spotifyApi.setRefreshToken(refreshData.refresh_token);

  let numberOfTimesUpdated = 0;
  setInterval(async () => {
    numberOfTimesUpdated += 1;

    if (numberOfTimesUpdated > 5) {
      clearInterval(this);
      await spotifyApi.refreshAccessToken();
    }
  }, 1000);
};

export default { createAccessToken, startRefreshingAccessToken };
