//libraries
const { Client } = require('discord.js');
const JSONdb = require('simple-json-db');
const mineflayer = require('mineflayer');
const prompt = require('prompt-sync')();
const chalk = require('chalk');

//configuration for the database
const db = new JSONdb('./src/index.json');

//startup
const pink = chalk.hex('#FFC0CB')
console.log(pink('🌸 Guild Chat'));

//checks
if (db.get('email') === null) {
    console.log('');
    console.log(pink('🌸 Configuration'));
    console.log(pink('If the prompt leaves then start the program as its done!'));
    console.log('');
};

if (db.get('email') === null) {
    console.log(pink('In order to start this program, first you need an email!'));
    const email = prompt(pink('Enter Email > '));
    db.set('email', email || null);
    console.log('');
};

if (db.get('channel') === null) {
    console.log(pink('In order to start this program, first you need a discord channel id!'));
    const id = prompt(pink('Enter Channel ID > '));
    db.set('channel', id || null);
    console.log('');
};

if (db.get('token') === null) {
    console.log(pink('In order to start this program, first you need an token for your discord bot!'));
    const token = prompt(pink('Enter Token > '));
    db.set('token', token || null);
    console.log('');
};

const client = new Client({ intents: [ 32627 ]});

const bot = mineflayer.createBot({
    host: 'proxy.hypixel.net',
    username: db.get('email'), 
    version: '1.8.9',
    auth: 'microsoft' 
});

bot.on('spawn', async () => {
    console.log(pink('🌸 Minecraft Connected'));

    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
    bot.chat('/');
});

client.on('ready', async () => {
    console.log(pink('🌸 Discord Connected'));
});

bot.on('chat', async (username, message) => {
  const args = message.split(' ');

  if (!args[1]) return;
  if (username === bot.username) return;
  if (username !== "Guild") return;
  if (!username === "Guild") return;

  if (message === "Message Of The Day  --------------") return;

  console.log(pink(`🌸 Minecraft > ${message}`));

  client.channels.cache.get(db.get('channel')).send({ content: `\`\`\`\n${message}\n\`\`\`` });
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.id === db.get('channel')) {
        console.log(pink(`🌸 Discord > ${message.author.username}: ${message.content}`));
        bot.chat(`/gc ${message.author.username}: ${message.content}`);
    };
});

client.login(db.get('token'));