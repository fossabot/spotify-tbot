import core from './core';
import action from './action';

const token = process.env.TOKEN;

const bot = core(token);
action(bot);

export default bot;
