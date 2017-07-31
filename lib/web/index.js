import express from 'express';
import bodyParser from 'body-parser';
import route from './route';

const port = process.env.PORT || 80;
const ip = process.env.IP || '0.0.0.0';

export default function (bot) {
  const app = express();

  app.use(bodyParser.json());
  route(app, bot);

  app.listen(port, ip, () => {
    console.log(`Web server started at ${ip}:${port}`);
  });
}
