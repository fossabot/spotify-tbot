import spotify from '../spotify';

const spotifyFilter = /spotify:(.*):(.*)/;

export default function (bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hello! Please Typing spotify track!');
  });

  bot.onText(spotifyFilter, (msg) => {
    const trackId = spotifyFilter.exec(msg.text)[2];

    spotify.getTrack(trackId)
      .then((data) => {
        bot.sendAudio(msg.chat.id, data.body.preview_url, { title: 'title' });
      });
  });
}
