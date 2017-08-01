export default function (app, bot) {
  app.get('/', (req, res) => {
    res.json({
      name: 'spotify bot',
    });
  });

  app.post(`/${bot.token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
}
