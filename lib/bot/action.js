export default function (bot) {
  bot.onText(/hell/, (msg) => {
    const userName = msg.from.first_name;
    bot.sendMessage(msg.chat.id, `Hello, ${userName}!`)
      .then(() => console.log('Send IT.'));
  });

  bot.onText(/^\/sp /, (msg) => {
    bot.sendPhoto(msg.chat.id, 'https://www.google.co.kr/images/branding/googleg/1x/googleg_standard_color_128dp.png')
      .then(() => console.log('oho'));
  });
}
