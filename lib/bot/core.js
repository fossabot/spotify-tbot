import TelegramBot from 'node-telegram-bot-api';

const nodeEnv = process.env.NODE_ENV;
const webHookUrl = process.env.BOT_URL;

export default function (token) {
  let bot;
  if (nodeEnv === 'production') {
    bot = new TelegramBot(token);
    bot.setWebHook(webHookUrl + token);

    bot.on('webhook_error', (err) => {
      console.log('ERROR : Cant WebHook.');
      console.log(err);
    });
  } else {
    bot = new TelegramBot(token, { polling: true });

    bot.on('polling_error', (err) => {
      console.log('ERROR : Cant Polling.');
      console.log(err);
    });
  }

  console.log(`Bot started with ${bot.options.polling ? 'polling' : 'webhook'} mode in ${nodeEnv}`);

  return bot;
}
