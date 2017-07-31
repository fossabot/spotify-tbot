import TelegramBot from 'node-telegram-bot-api';

const nodeEnv = process.env.NODE_ENV;
const webHookUrl = process.env.BOT_URL;

export default function (token) {
  let bot;
  if (nodeEnv === 'production') {
    bot = new TelegramBot(token);
    bot.setWebHook(webHookUrl + token);
  } else {
    bot = new TelegramBot(token, { pulling: true });
  }

  return bot;
}
