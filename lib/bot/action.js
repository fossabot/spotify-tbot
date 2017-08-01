import spotify from '../spotify';

const spotifyFilter = /spotify:(.*):(.*)/;

export default function (bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hello! Please Typing spotify track!');
  });

  bot.onText(/\/suri spotify:/, async (msg) => {
    const trackId = spotifyFilter.exec(msg.text)[2];
    const data = (await spotify.getTrack(trackId)).body;

    await bot.sendPhoto(msg.chat.id, data.album.images[1].url, {
      reply_to_message_id: msg.message_id,
      caption: `${data.name} - ${data.artists[0].name}`,
    });
  });
}
