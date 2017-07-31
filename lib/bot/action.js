import spotify from '../spotify';

const spotifyFilter = /spotify:(.*):(.*)/;

export default function (bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hello! Please Typing spotify track!');
  });

  bot.onText(spotifyFilter, async (msg) => {
    const trackId = spotifyFilter.exec(msg.text)[2];

    const data = await spotify.getTrack(trackId);
    bot.sendAudio(msg.chat.id, data.body.preview_url, { title: 'title', performer: 'performer' })
      .then(() => console.log('success'))
      .catch(err => console.log('error'));
  });
}
