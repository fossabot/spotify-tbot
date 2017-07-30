import Express from 'express';
import BodyParser from 'body-parser';

const version = process.env.VERSION;
const port = process.env.PORT;
const ip = "0.0.0.0";

const app = Express();
app.use(BodyParser.json());

app.get('/', (req, res) => {
    res.json({
        version: version
    });
});

const server = app.listen(port, ip, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Web server started at http://${host}:${port}`);
});

export default function(telegramBot) {
    app.post(`/${telegramBot.token}`, (req, res) => {
        telegramBot.processUpdate(req.body);
        res.sendStatus(200);
    });
}