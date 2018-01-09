<p align="center">
    <img width="350" src='https://cdn.rawgit.com/CodeRi13/spotify-tbot/ccb3a755/spotifybot.png'/><br>
    <b>
        <span>그냥 <code>/suri SPOTIFY_TRACK_URI</code> 을 타이핑 하세요!</span>
        <br>
        <span>Just type <code>/suri SPOTIFY_TRACK_URI</code> !</span>
    </b>
    <br>
    <br>
</p>

## Requirement
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FW1m3R%2Fspotify-tbot.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FW1m3R%2Fspotify-tbot?ref=badge_shield)


1. The version of `NodeJS` should be higher than `8.x.x`.

2. We need some enviroment value :
- `TOKEN` (Telegram token)
- `SPOTIFY_CLIENT_ID` (Spotify client id)
- `SPOTIFY_CLIENT_SECRET` (Spotify client secret)
- `BOT_URL` (If you use webhook, this url should be your webhook url.)
- `PORT` (If you need. Default is 80.)



## Running (in polling)

```
export TOKEN=YOUR_TELEGRAM_TOKEN
export SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
export SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET

npm i
npm run build
npm run start
```

## Running (in webhooking)

```
export TOKEN=YOUR_TELEGRAM_TOKEN
export SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
export SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
export BOT_URL=YOUR_WEBHOOK_URL

npm i
npm run build
npm run start
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FW1m3R%2Fspotify-tbot.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FW1m3R%2Fspotify-tbot?ref=badge_large)