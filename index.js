
/**
 * 
 * how to get a secret key to connect with a telegram bot
 * 1. Open telegram and search for the BotFather (verified account should be there)
 * 2. type '/start'
 * 3. Give a user name
 * 4. Give a bot name that must end with the bot eg:. zu_bot
 * 5. Get the access key 
 * 6. "/" recognizes as a telegram command 
 * 7. URL of my bot: t.me/zucode_bot
 * 8. bot token: '5891789903:AAH1V9tGzCbCuXL6X9HZUG_AJqEh07CEmZM'
 * 
 */


const { Telegraf } = require('telegraf');
const bot = new Telegraf('5891789903:AAH1V9tGzCbCuXL6X9HZUG_AJqEh07CEmZM');
bot.start((ctx) => ctx.reply('Welcome'));
bot.command("hey", (ctx) => ctx.reply("hello there"))
bot.launch();
