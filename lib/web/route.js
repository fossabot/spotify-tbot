export default function (app) {
  app.get('/', (req, res) => {
    res.json({
      name: 'spotify bot',
    });
  });
}
