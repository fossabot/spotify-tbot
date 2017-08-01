export default function(tbot, token) {
    let bot;

    if(process.env.NODE_ENV === 'production') {
        bot = new tbot(token);
        bot.setWebHook(process.env.BOTURL + bot.token);
    } else {
        bot = new tbot(token, { polling: true });
    }

    return bot;
}