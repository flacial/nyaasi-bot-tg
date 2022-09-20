# nyaasi-bot-tg
Telegram bot that fetches nyaa.si RSS feed and format it into channel posts

---

### How to start the bot

- Make a copy of `.env.example` and rename it to `.env`
- Fill the environment variables
  - Get the `CHANNEL_ID` and `DEV_CHANNEL_ID` by sending a post from these channels to [JsonDumpBot](https://t.me/JsonDumpBot)
  - Get the `BOT_TOKEN` from [BotFather](https://t.me/BotFather)
- Run `yarn` to install the packages
- Run `yarn start:bot` to start the bot
- Run `yarn start:server` to start the server

### Deploy

It's possible to deploy it to Heroku if they kept the free-tier available.
