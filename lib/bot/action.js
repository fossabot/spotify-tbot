export default function (bot) {
  bot.onText(/^/, (msg) => {
    const userName = msg.from.first_name;
    bot.sendMessage(msg.chat.id, `Hello, ${userName}!`)
      .then(() => console.log('Send IT.'));
  });
}
