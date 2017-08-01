import TBot from 'node-telegram-bot-api';
import RunBot from './runbot';
import Spotify from './spotify';

const token = process.env.TOKEN;
console.log(`Your bot token is ${token}`)

let bot = RunBot(TBot, token);
Spotify(bot);

console.log(`Bot started in ${process.env.NODE_ENV} mode`);

export default bot;